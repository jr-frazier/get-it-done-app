'use server'

import {z} from "zod";
import {taskSchema, taskFormSchema, addTaskResponse} from "@/schema/task";
import {tasksData} from "@/server/tempData";
import {db} from "@/drizzle/db";
import {subTaskTable, taskTable} from "@/drizzle/schema";
import {ApiResponse, ErrorResponse} from "@/server/types";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import {eq, inArray} from "drizzle-orm";



export const getTasks = async (projectId: string): Promise<z.infer<typeof taskSchema>[]> => {
    try {
        // Step 1: Fetch all tasks for the given project
        const tasks = await db
            .select()
            .from(taskTable)
            .where(eq(taskTable.projectId, projectId));

        // // Step 2: Fetch all subtasks that belong to those tasks
        const taskIds = tasks.map((t) => t.id);
        //
        const subtasks = await db
            .select()
            .from(subTaskTable)
            .where(inArray(subTaskTable.taskId, taskIds)); // placeholder if no tasks

        // Step 3: Group subtasks by their taskId
        const subtasksByTaskId = subtasks.reduce((acc, subtask) => {
            if (!acc[subtask.taskId]) acc[subtask.taskId] = [];
            acc[subtask.taskId].push(subtask);
            return acc;
        }, {} as Record<string, typeof subtasks>);

        // Step 4: Combine tasks with their subtasks
        const result = tasks.map((task) => ({
            ...task,
            subtasks: subtasksByTaskId[task.id] || [],
        }));

        return result;
    } catch (error) {
        console.error("❌ Error fetching tasks and subtasks:", error);
        throw new Error("Failed to fetch tasks and subtasks");
    }
}

export const addTask = async (unsafeData: z.infer<typeof taskFormSchema>, projectId: string): Promise<ApiResponse<z.infer<typeof addTaskResponse>>> => {
    try {
        const {success, data} = taskFormSchema.safeParse(unsafeData);
        if (!success) {
            return {success: false, error: "Invalid data"}
        }

        const [newTask] = await db.insert(taskTable).values({...data, projectId: projectId}).returning()
        return {success: true, data: newTask}
    }
    catch (error) {
        console.error("Error fetching tasks:", error);
        return {success: false, error: "Failed to fetch tasks"}
    } finally {
      revalidatePath(`/dashboard/${projectId}`)
      redirect(`/dashboard/${projectId}`)
    }
}

