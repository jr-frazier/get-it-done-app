import {getTasks} from "@/server/actions/tasks";
import TaskCard from "@/components/TaskCard";

export default async function Page({params}: { params: { projectId: string }}) {
    const {projectId} = await params
    const tasks = await getTasks(projectId)

    if (!tasks) return <div>No tasks found</div>

    return (
        <div className="flex flex-col gap-5">
            {
                tasks.map((task) => (<TaskCard key={task.id} task={task}/>))
            }
        </div>
    )
}