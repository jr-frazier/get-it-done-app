'use client'

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import React from "react"
import {taskFormSchema} from "@/components/forms/task-forms/taskFormSchema";
import BaseTaskForm from "@/components/forms/task-forms/BaseTaskForm";
import { useParams } from "next/navigation";
import {addSubTask} from "@/server/actions/sub-tasks";


type TaskFormProps = z.infer<typeof taskFormSchema>

export default function CreateSubtaskForm() {
    const params = useParams()

    const form = useForm<TaskFormProps>({
        resolver: zodResolver(taskFormSchema),
        defaultValues: {
            name: "",
            emoji: "",
            description: "",
        }
    })

    async function onSubmit(values: TaskFormProps) {
        const data = await addSubTask(values, params.taskId as string, params.projectId as string)

        if (!data.success) {
            form.setError("root", {
                message: `${data.error}`
            })
        }

    }

    return (
        <>
            <h1 className="text-3xl mb-28">Create Subtask</h1>
            <BaseTaskForm onSubmit={onSubmit} form={form}/>
        </>
    )
}
