import EditTaskForm from "@/components/forms/task-forms/EditTaskForm";
import {getTask} from "@/server/actions/tasks";


export default async function EditTaskPage(params: { params: { projectId: string, taskId: string } }) {
    const {taskId} = await params.params
    const task = await getTask(taskId)

    return (
        <EditTaskForm task={task} />
    )
}