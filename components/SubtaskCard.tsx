'use client'

import {z} from "zod";
import {Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {subtaskSchema} from "@/schema/subtask";
import CompletedIndicator from "@/components/CompletedIndicator";
import {markSubtaskComplete, markSubtaskIncomplete} from "@/server/actions/sub-tasks";

type TaskCardProps = {
    subTask:  z.infer<typeof subtaskSchema>
    projectId: string
    taskCompleted: boolean
}

export default function SubtaskCard({subTask, projectId, taskCompleted }: TaskCardProps) {
    const handleMarkComplete = async () => {
        try {
            await markSubtaskComplete(subTask, projectId)
        } catch (error) {
            console.error('Failed to update sub-task:', error)
        }
    }

    const handleMarkIncomplete = async () => {
        try {
            await markSubtaskIncomplete(subTask, projectId)
        } catch (error) {
            console.error('Failed to update sub-task:', error)
        }
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    <Link href={`/project/${projectId}/${subTask.id}`} className={`flex items-center gap-2`}>
                        {subTask.emoji} {subTask.name}
                    </Link>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p>{subTask.description}</p>
            </CardContent>
            <CardFooter>
                <CardAction>
                    {
                        subTask.completed ? <Button disabled={taskCompleted} variant="warningOutline" onClick={handleMarkIncomplete}>Mark Incomplete</Button> : <Button variant="successOutline" onClick={handleMarkComplete}>Mark Complete</Button>
                    }
                    {subTask.completed && <CompletedIndicator/>}
                </CardAction>
            </CardFooter>
        </Card>
    )

}