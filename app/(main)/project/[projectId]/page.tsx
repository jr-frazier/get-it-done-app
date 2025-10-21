import {getTasks} from "@/server/actions/tasks";
import TaskCard from "@/components/TaskCard";
import {deleteProject, getProject} from "@/server/actions/project";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default async function Page({params}: { params: { projectId: string } }) {
    const {projectId} = await params
    const project = await getProject(projectId)
    const tasks = await getTasks(projectId)

    if (!tasks) return <div>No tasks found</div>
    const handleDelete = async () => {
        "use server"
        await deleteProject(projectId)
    }

    return (
        <form action={handleDelete}>
            <div className="flex flex-col gap-24 mb-5">
                <div className="flex justify-between">
                    <h1 className="text-3xl">{project.emoji} {project.name}</h1>
                    <Button type="submit" variant="dangerOutline">
                        Delete Project
                    </Button>
                </div>

                <div>
                    <Button variant="successOutline" asChild>
                        <Link href={`/project/${projectId}/add-task`}>
                            + Add Task
                        </Link>
                    </Button>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                {
                    tasks.map((task) => (<TaskCard key={task.id} task={task} projectId={projectId}/>))
                }
            </div>
        </form>
    )
}