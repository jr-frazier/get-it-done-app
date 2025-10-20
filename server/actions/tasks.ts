'use server'

import {z} from "zod";
import {taskSchema, taskFormSchema, taskResponse} from "@/schema/task";
import {db} from "@/drizzle/db";
import {subTaskTable, taskTable} from "@/drizzle/schema";
import {ApiResponse } from "@/server/types";
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

export const getTask = async (taskId: string): Promise<z.infer<typeof taskResponse>> => {
    try {
        const [task] = await db.select().from(taskTable).where(eq(taskTable.id, taskId));
        return task;
    } catch (error) {
        console.error("Error fetching task:", error);
        throw new Error("Failed to fetch task");
    }
}

export const updateTask = async (taskId: string, data: z.infer<typeof taskFormSchema>): Promise<ApiResponse<z.infer<typeof taskFormSchema>>> => {
    try {
        const {success, error} = taskFormSchema.safeParse(data);
        if (!success) {
            return {success: false, error: "Invalid data"}
        }
        const [updatedTask] = await db.update(taskTable).set(data).where(eq(taskTable.id, taskId)).returning();
        return {success: true, data: updatedTask}
    } catch (error) {
        console.error("Error updating task:", error);
        return {success: false, error: "Failed to update task"}
    }
}

export const deleteTask = async (taskId: string): Promise<ApiResponse<void>> => {
    try {
        await db.delete(taskTable).where(eq(taskTable.id, taskId));
        return {success: true, data: undefined}
    } catch (error) {
        console.error("Error deleting task:", error);
        return {success: false, error: "Failed to delete task"}
    }
}


export const markTaskComplete = async (task: z.infer<typeof taskResponse>): Promise<ApiResponse<void>> => {
    try {
        // Update the task
        await db.update(taskTable)
            .set({completed: true})
            .where(eq(taskTable.id, task.id));

        // Update all subtasks
        await db.update(subTaskTable)
            .set({completed: true})
            .where(eq(subTaskTable.taskId, task.id));

        return {success: true, data: undefined};
    } catch (error) {
        console.error("Error marking task complete:", error);
        return {success: false, error: "Failed to mark task complete"};
    } finally {
        revalidatePath(`project/${task.projectId}/${task.id}`)
    }
}

export const markTaskIncomplete = async (task: z.infer<typeof taskResponse >) => {
    try {
        await db.update(taskTable)
        .set({completed: false})
        .where(eq(taskTable.id, task.id));
    }
    catch (error) {
        console.error("Error marking task incomplete:", error);
        return {success: false, error: "Failed to mark task incomplete"};
    }
    finally {
        revalidatePath(`project/${task.projectId}/${task.id}`)
    }
}

export const addTask = async (unsafeData: z.infer<typeof taskFormSchema>, projectId: string): Promise<ApiResponse<z.infer<typeof taskResponse>>> => {
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

