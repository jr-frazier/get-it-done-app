import EmojiSelect from "@/components/forms/form-fields/EmojiSelect";
import NameField from "@/components/forms/form-fields/NameField";
import DescriptionField from "@/components/forms/form-fields/DescriptionField";
import {Button} from "@/components/ui/button";
import {Form} from "@/components/ui/form";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import {taskFormSchema} from "@/components/forms/task-forms/taskFormSchema";
import {z} from "zod";

type TaskValueProps= z.infer<typeof taskFormSchema>


type BaseTaskFormProps = {
    onSubmit: (values: TaskValueProps) => void;
    form: UseFormReturn<TaskValueProps>
}

export default function BaseTaskForm({ onSubmit, form }: BaseTaskFormProps) {

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <EmojiSelect/>
                <NameField/>
                <DescriptionField/>
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}