'use client'

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import React from "react"
import {projectFormSchema} from "@/components/forms/project-forms/projectFormSchema";
import BaseTaskForm from "@/components/forms/task-forms/BaseTaskForm";
import {createProject} from "@/server/actions/project";

type ProjectFormProps = z.infer<typeof projectFormSchema>

export default function CreateProjectForm() {
    const form = useForm<ProjectFormProps>({
        resolver: zodResolver(projectFormSchema),
        defaultValues: {
            name: "",
            emoji: "",
            description: "",
        }
    })

    async function onSubmit(values: ProjectFormProps) {
        const data = await createProject(values)

        if (data?.error) {
            form.setError("root", {
                message: `${data.error}`
            })
        }
    }

    return (
        <BaseTaskForm onSubmit={onSubmit} form={form}/>
    )
}