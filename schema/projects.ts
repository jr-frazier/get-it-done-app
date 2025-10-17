import {z} from 'zod'

export const projectSchema = z.object({
    name: z.string(),
    description: z.string(),
    emoji: z.string(),
})

export const projectResponseSchema = projectSchema.extend({
    id: z.string(),
    clerkUserId: z.string(),
    updatedAt: z.date(),
    createdAt: z.date(),
})