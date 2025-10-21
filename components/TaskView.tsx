'use client'

import {TaskButtonGroup} from "@/components/TaskButtonGroup";
import {taskResponse} from "@/schema/task";
import {z} from "zod";
import {markTaskComplete, markTaskIncomplete} from "@/server/actions/tasks";

type Props = {
    task: z.infer<typeof taskResponse>
}

export default function TaskView({task}: Props)  {

    const handleMarkComplete = async () => {
        try {
            await markTaskComplete(task)
        } catch (error) {
            console.error('Failed to update task:', error)
        }
    }

    const handleMarkIncomplete = async () => {
        try {
            await markTaskIncomplete(task)
        } catch (error) {
            console.error('Failed to update task:', error)
        }
    }

    return (
        <div className="flex flex-col gap-24 justify-start">
            <div className="flex flex-col gap-5">
                <h1 className="text-4xl">{task.emoji} {task.name}</h1>
                <p>{task.description}</p>
            </div>

            <TaskButtonGroup handleMarkComplete={handleMarkComplete} handleMarkIncomplete={handleMarkIncomplete}   completed={task.completed}/>
        </div>
    )
}