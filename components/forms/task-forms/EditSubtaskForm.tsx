'use client'

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import React from "react"
import {taskFormSchema} from "@/components/forms/task-forms/taskFormSchema";
import BaseTaskForm from "@/components/forms/task-forms/BaseTaskForm";
import {addTask, updateTask} from "@/server/actions/tasks";
import { useParams } from "next/navigation";
import {updateSubtask} from "@/server/actions/sub-tasks";


type TaskFormProps = z.infer<typeof taskFormSchema>

type Props = {
    task: z.infer<typeof taskFormSchema>
}

export default function EditSubtaskForm({task}: Props) {
    const params =  useParams()

    const form = useForm<TaskFormProps>({
        resolver: zodResolver(taskFormSchema),
        defaultValues: {
            name: "",
            emoji: "",
            description: "",
        }
    })

    React.useEffect(() => {
        form.reset({
            name: task.name,
            emoji: task.emoji,
            description: task.description,
        })
    }, [task])

    async function onSubmit(values: TaskFormProps) {
        // Ensure `params` is available
        if (!params.taskId || !params.projectId || !params.subtaskId) {
            console.error("Missing parameters:", params)
            form.setError("root", {
                message: "Required parameters are missing."
            })
            return
        }
        const data = await updateSubtask( params.taskId as string, params.projectId as string, params.subtaskId as string, values)

        if (!data.success) {
            form.setError("root", {
                message: `${data.error}`
            })
        }

    }

    return (
        <>
            <h1 className="text-3xl mb-28">Edit Subtask</h1>
            <BaseTaskForm onSubmit={onSubmit} form={form}/>
        </>
    )
}
