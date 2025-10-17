import {taskSchema} from "@/schema/task";
import {z} from "zod";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Button} from "@/components/ui/button";
import {format} from "date-fns";

type TaskCardProps = {
    task: z.infer<typeof taskSchema>
}

export default function TaskCard({task}: TaskCardProps) {
    // const currentDate = format(task.createdAt, "MMM dd yyyy");
    console.log(task)

    return (
        <Card>
            <CardHeader>
                <CardTitle>{task.emoji} {task.name}</CardTitle>
            </CardHeader>
            <CardContent>
                <p>{task.description}</p>
                {/*<CardDescription>*/}
                {/*    Created at: {task.createdAt}*/}
                {/*</CardDescription>*/}
            </CardContent>
            <CardFooter>
                <CardAction>
                    <Button variant="successOutline">Done</Button>
                </CardAction>
            </CardFooter>
        </Card>

    )

}