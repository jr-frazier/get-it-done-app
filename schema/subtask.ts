import {z} from 'zod'


export const subtaskSchema = z.object({
        id: z.number(),
        name: z.string(),
        description: z.string(),
        completed: z.boolean(),
        emoji: z.string(),
        createdDate: z.string(),
        updatedDate: z.string(),
    }
)