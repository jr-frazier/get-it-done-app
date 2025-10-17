import { z } from "zod";
import {subtaskSchema} from "@/schema/subtask";

const baseTaskSchema = z.object({
    name: z.string(),
    description: z.string(),
    emoji: z.string(),
})

export const taskSchema = baseTaskSchema.extend({
    id: z.string(),
    completed: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date(),
    subtasks: z.array(subtaskSchema),
})

export const addTaskResponse = baseTaskSchema.extend({
    id: z.string(),
    completed: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date(),
    projectId: z.string(),
})

export const taskFormSchema = baseTaskSchema.extend({})