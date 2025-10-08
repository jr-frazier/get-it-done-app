import {z} from 'zod'

export const projectSchema = z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
    logo: z.string(),
})