'use client'

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import React from "react"
import {taskFormSchema} from "@/components/forms/task-forms/taskFormSchema";
import BaseTaskForm from "@/components/forms/task-forms/BaseTaskForm";
import {addTask} from "@/server/actions/tasks";
import { useParams } from "next/navigation";


type TaskFormProps = z.infer<typeof taskFormSchema>

export default function CreateTaskForm() {
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
        const data = await addTask(values, params.projectId as string)

        if (!data.success) {
            form.setError("root", {
                message: `${data.error}`
            })
        }

    }

    return (
        <>
            <h1 className="text-3xl mb-28">Create Task</h1>
            <BaseTaskForm onSubmit={onSubmit} form={form}/>
        </>
    )
}
