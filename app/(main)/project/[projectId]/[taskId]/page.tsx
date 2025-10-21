import {getSubTasks} from "@/server/actions/sub-tasks";
import {getTask} from "@/server/actions/tasks";
import TaskView from "@/components/TaskView";
import SubtaskCard from "@/components/SubtaskCard";
import {ArrowLeft} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";


export default async function SubTaskPage(params: { params: { projectId: string, taskId: string } }) {
    const {projectId, taskId} = await params.params

    const subTasks = await getSubTasks(taskId)
    const task = await getTask(taskId)


    return (
        <div className="flex flex-col gap-5">
            <div className="mb-14">
                <Button variant="outline" asChild>
                    <Link href={`/project/${projectId}`}>
                        {<ArrowLeft/>}Back
                    </Link>
                </Button>
            </div>
            <TaskView task={task}/>
            {
                subTasks.map((subTask) => (<SubtaskCard key={subTask.id} subTask={subTask} projectId={projectId}
                                                        taskCompleted={task.completed}/>))
            }
        </div>
    )
}