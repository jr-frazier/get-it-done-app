'use client'

import {taskResponse} from "@/schema/task";
import {z} from "zod";
import {Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import {Button} from "@/components/ui/button";
import Link from "next/link";
import CompletedIndicator from "@/components/CompletedIndicator";
import {markTaskComplete, markTaskIncomplete} from "@/server/actions/tasks";

type TaskCardProps = {
    task: z.infer<typeof taskResponse>
    projectId: string
}

export default function TaskCard({task, projectId}: TaskCardProps) {
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
        <Card>
            <CardHeader>
                <CardTitle>
                    <Link href={`/project/${projectId}/${task.id}`} className={`flex items-center gap-2`}>
                        {task.emoji} {task.name}
                    </Link>
                </CardTitle>

            </CardHeader>
            <CardContent>
                <p>{task.description}</p>
            </CardContent>
            <CardFooter>
                <CardAction>
                    {
                        task.completed ? <Button variant="warningOutline" onClick={handleMarkIncomplete}>Mark Incomplete</Button> : <Button variant="successOutline" onClick={handleMarkComplete}>Mark Complete</Button>
                    }
                    {task.completed && <CompletedIndicator/>}
                </CardAction>
            </CardFooter>
        </Card>

    )

}