import {getSubTask} from "@/server/actions/sub-tasks";
import EditSubtaskForm from "@/components/forms/task-forms/EditSubtaskForm";


export default async function EditTaskPage(params: { params: { projectId: string, taskId: string, subtaskId: string } }) {
    const {subtaskId} = await params.params
    const task = await getSubTask(subtaskId)

    return (
        <EditSubtaskForm task={task} />
    )
}