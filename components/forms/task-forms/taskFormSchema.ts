import {z} from "zod";

export const taskFormSchema = z.object({
    name: z.string().min(1, "Name is required").max(30, "you reached the max"),
    emoji: z.string().min(1, "Emoji is required"),
    description: z.string().min(1, "Description is required")
})