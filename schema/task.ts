import { z } from "zod";
import {subtaskSchema} from "@/schema/subtask";

export const taskSchema = z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
    completed: z.boolean(),
    emoji: z.string(),
    createdDate: z.string(),
    updatedDate: z.string(),
    subtasks: z.array(subtaskSchema),
})