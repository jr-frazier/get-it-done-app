import {tasksData} from "@/server/tempData";

export const getTasks = async () => {
    await new Promise((resolve) => setTimeout(resolve, 50));

    return tasksData
}

