import {z} from 'zod'


export const subtaskSchema = z.object({
        id: z.string(),
        name: z.string(),
        taskId: z.string(),
        description: z.string(),
        completed: z.boolean(),
        emoji: z.string(),
        createdAt: z.date(),
        updatedAt: z.date(),
    }
)
