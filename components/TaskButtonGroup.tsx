'use client'
import {Button} from "@/components/ui/button";
import CompletedIndicator from "@/components/CompletedIndicator";
import Link from "next/link";
import { usePathname } from "next/navigation";


type Props = {
   completed: boolean | undefined;
   handleMarkComplete?: () => void;
   handleMarkIncomplete?: () => void;

}


export const TaskButtonGroup = ({handleMarkComplete, handleMarkIncomplete, completed}: Props) => {
    const pathname = usePathname();

    return (
        <div className="flex gap-5">
            {
                completed ? <Button variant="warningOutline" onClick={handleMarkIncomplete}>Mark Incomplete</Button> : <Button variant="warningOutline" onClick={handleMarkComplete}>Mark Complete</Button>
            }

            <Button disabled={completed} variant="successOutline">
                <Link href={`${pathname}/add-subtask`}>
                    + Add Subtask
                </Link>
            </Button>
            <Button disabled={completed} variant="outline"><Link href={`${pathname}/edit-task`}>
                Edit
            </Link></Button>
            {completed && <CompletedIndicator/>}
        </div>
    )
}