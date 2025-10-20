import {z} from 'zod'
const baseSubtaskSchema = z.object({
    name: z.string(),
    description: z.string(),
    emoji: z.string(),
})

export const subtaskSchema = baseSubtaskSchema.extend({
        id: z.string(),
        taskId: z.string(),
        completed: z.boolean(),
        createdAt: z.date(),
        updatedAt: z.date(),
    }
)

export const subtaskFormSchema = baseSubtaskSchema.extend({})
