'use client'

import React from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {taskFormSchema} from "@/components/forms/task-forms/taskFormSchema";
import BaseTaskForm from "@/components/forms/task-forms/BaseTaskForm";


type TaskFormProps = z.infer<typeof taskFormSchema>

export default function UpdateTaskForm(formValues: TaskFormProps) {
    const form = useForm<TaskFormProps>({
        resolver: zodResolver(taskFormSchema),
        defaultValues: {
            name: "",
            emoji: "",
            description: ""
        }
    })



    function onSubmit(values: TaskFormProps) {
        console.log("Form Values", values)
    }

    return (
      <BaseTaskForm onSubmit={onSubmit} form={form}/>
    )
}
