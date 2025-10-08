'use client'

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Smile } from "lucide-react"
import EmojiPicker, { EmojiClickData } from "emoji-picker-react"
import React from "react"

const taskFormSchema = z.object({
    name: z.string().min(1, "Name is required").max(5, "you reached the max"),
    emoji: z.string().optional(),
})

type TaskFormProps = z.infer<typeof taskFormSchema>

export default function TaskForm() {
    const form = useForm<TaskFormProps>({
        resolver: zodResolver(taskFormSchema),
    })

    function onSubmit(values: TaskFormProps) {
        console.log("Form Values", values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Name Field */}
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Emoji Picker Field */}
                <FormField
                    control={form.control}
                    name="emoji"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Emoji</FormLabel>
                            <FormControl>
                                <div className="flex items-center gap-2">
                                    {/* Input triggers the picker */}
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Input
                                                readOnly
                                                placeholder="Select an emoji"
                                                value={field.value ?? ""}
                                                className="w-[80px] cursor-pointer"
                                            />
                                        </PopoverTrigger>
                                        <PopoverContent className="p-0">
                                            <div className="flex flex-col items-center">
                                                <EmojiPicker
                                                    onEmojiClick={(emojiData: any) => {
                                                        field.onChange(emojiData.emoji);
                                                    }}
                                                />

                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => field.onChange("")}
                                    >
                                        Clear
                                    </Button>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />


                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}
