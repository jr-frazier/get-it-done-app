import {z} from "zod";
import {taskSchema} from "@/schema/task";
import {tasksData} from "@/server/tempData";

export const getTasks = async (): Promise<z.infer<typeof taskSchema>[]> => {
    await new Promise((resolve) => setTimeout(resolve, 50));

    return tasksData as z.infer<typeof taskSchema>[]
}

