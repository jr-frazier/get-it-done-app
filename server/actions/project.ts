'use server'

import {projectResponseSchema, projectSchema} from "@/schema/projects";
import {db} from '@/drizzle/db'
import {auth} from "@clerk/nextjs/server";
import {z} from "zod";
import {ProjectTable} from "@/drizzle/schema";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import {ErrorResponse} from "@/server/types";


export const createProject = async (unsafeValues: z.infer<typeof projectSchema>): Promise<ErrorResponse | void> => {
    try {
        const {userId} = await auth();

        const {success, data} = projectSchema.safeParse(unsafeValues);

        if (!success) {
            return {error: "Invalid project data"}
        }

        if (!userId) {
            return {error: "User not authenticated"}
        }

        await db.insert(ProjectTable).values({...data, clerkUserId: userId})
    } catch (error) {
        console.error("Error creating project:", error);
        return {error: "Failed to create project"}
    } finally {
        revalidatePath("/dashboard")
        revalidatePath("/dashboard", "layout")
        redirect("/dashboard")
    }

}

export const getProjects = async (clerkUserId: string): Promise<z.infer<typeof projectResponseSchema>[]> => {
    const projects = await db.query.ProjectTable.findMany({
        where: ({clerkUserId: userIdCol}, {eq}) => eq(userIdCol, clerkUserId),
        orderBy: ({createdAt: dateCol}, {desc}) => desc(dateCol),
    })


    projects.forEach(project => {
       const result = projectResponseSchema.safeParse(project)

        if (!result.success) {
            console.error("Invalid project data:", result.error)
            return
        }
    })

    return projects

}

// export const getProjects = async () => {
//     await new Promise((resolve) => setTimeout(resolve, 50));
//
//     return {data: projectData}
// }