import {projectData} from "@/server/tempData";

export const getProjects = async () => {
    await new Promise((resolve) => setTimeout(resolve, 50));

    return {data: projectData}
}