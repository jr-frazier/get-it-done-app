'use client'
import {Button} from "@/components/ui/button";
import CompletedIndicator from "@/components/CompletedIndicator";


type Props = {
   completed: boolean | undefined;
   handleMarkComplete?: () => void;
   handleMarkIncomplete?: () => void;
}


export const TaskButtonGroup = ({handleMarkComplete, handleMarkIncomplete, completed}: Props) => {
    return (
        <div className="flex gap-5">
            {
                completed ? <Button variant="warningOutline" onClick={handleMarkIncomplete}>Mark Incomplete</Button> : <Button variant="warningOutline" onClick={handleMarkComplete}>Mark Complete</Button>
            }

            <Button variant="successOutline">+ Add Subtask</Button>
            {completed && <CompletedIndicator/>}
        </div>
    )
}