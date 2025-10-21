'use server'

import {z} from "zod";
import {db} from "@/drizzle/db";
import {subTaskTable, taskTable} from "@/drizzle/schema";
import {eq} from "drizzle-orm";
import {subtaskFormSchema, subtaskSchema} from "@/schema/subtask";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import {ApiResponse} from "@/server/types";
import {taskFormSchema, taskResponse} from "@/schema/task";


export const getSubTasks = async (taskId: string): Promise<z.infer<typeof subtaskSchema>[]> => {
    
    try {

        // Step 1: Fetch all tasks for the given project
        const subTasks = await db
            .select()
            .from(subTaskTable)
            .where(eq(subTaskTable.taskId, taskId))
            .orderBy(subTaskTable.name);

        return subTasks;
    } catch (error) {
        console.error("❌ Error fetching sub-tasks and subtasks:", error);
        throw new Error("Failed to fetch sub-tasks and subtasks");
    }
}

export const getSubTask = async (subTaskId: string): Promise<z.infer<typeof subtaskSchema>> => {
    try {
        const [subTask] = await db.select().from(subTaskTable).where(eq(subTaskTable.id, subTaskId));
        return subTask;
    } catch (error) {
        console.error("Error fetching sub-task:", error);
        throw new Error("Failed to fetch sub-task");
    }
}

export const updateSubtask = async (taskId: string, projectId: string, subtaskId: string, data: z.infer<typeof subtaskFormSchema>): Promise<ApiResponse<z.infer<typeof taskFormSchema>>> => {
    try {
        const {success, error} = subtaskFormSchema.safeParse(data);
        if (!success) {
            return {success: false, error: "Invalid data"}
        }
        const [updatedTask] = await db.update(subTaskTable).set(data).where(eq(subTaskTable.id, subtaskId)).returning();
        return {success: true, data: updatedTask}
    } catch (error) {
        console.error("Error updating task:", error);
        return {success: false, error: "Failed to update task"}
    } finally {
        revalidatePath(`project/${projectId}/${taskId}`)
        redirect(`/project/${projectId}/${taskId}`)
    }
}

export const deleteSubtask = async (taskId: string): Promise<ApiResponse<void>> => {
    try {
        await db.delete(subTaskTable).where(eq(subTaskTable.id, taskId));
        return {success: true, data: undefined}
    } catch (error) {
        console.error("Error deleting task:", error);
        return {success: false, error: "Failed to delete task"}
    }
}


export const markSubtaskComplete = async (task: z.infer<typeof subtaskSchema>, projectId: string): Promise<ApiResponse<void>> => {
    try {
        // Update the task
        await db.update(subTaskTable)
            .set({completed: true})
            .where(eq(subTaskTable.id, task.id));

        return {success: true, data: undefined};
    } catch (error) {
        console.error("Error marking task complete:", error);
        return {success: false, error: "Failed to mark task complete"};
    } finally {
        revalidatePath(`project/${projectId}/${task.id}`)
    }
}

export const markSubtaskIncomplete = async (task: z.infer<typeof subtaskSchema>, projectId: string) => {
    try {
        await db.update(subTaskTable)
            .set({completed: false})
            .where(eq(subTaskTable.id, task.id));
    }
    catch (error) {
        console.error("Error marking task incomplete:", error);
        return {success: false, error: "Failed to mark task incomplete"};
    }
    finally {
        revalidatePath(`project/${projectId}/${task.id}`)
    }
}

export const addSubTask = async (unsafeData: z.infer<typeof subtaskFormSchema>, taskId: string, projectId: string) => {
    try {
        const {success, data} = subtaskFormSchema.safeParse(unsafeData);
        if (!success) {
            return {success: false, error: "Invalid data"}
        }

        const [newSubTask] = await db.insert(subTaskTable).values({...data, taskId: taskId}).returning()
        return {success: true, data: newSubTask}
    } catch (error) {
        console.error("Error adding sub-task:", error);
        return {success: false, error: "Failed to fetch sub-tasks"}
    } finally {
        revalidatePath(`/project/${projectId}/${taskId}`)
        redirect(`/project/${projectId}/${taskId}`)
    }
}