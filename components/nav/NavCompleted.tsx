import { ChevronRight,  Plus } from "lucide-react"

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuAction,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import {taskSchema} from "@/schema/task";
import * as z from "zod";
import Link from "next/link";

export function NavCompleted({
                             tasks,
                         }: {
    tasks: z.infer<typeof taskSchema>[]
}) {
    if (tasks.length === 0) {
        return <></>
    }
    return (
        <SidebarGroup>
            <SidebarGroupLabel>🎉 Completed Tasks</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    {tasks.map((task) => (
                        <Collapsible key={task.id}>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href={`/project/${task.projectId}/${task.id}`}>
                                        <span>{task.emoji}</span>
                                        <span>{task.name}</span>
                                    </Link>
                                </SidebarMenuButton>
                                <CollapsibleTrigger asChild>
                                    <SidebarMenuAction
                                        className="bg-sidebar-accent text-sidebar-accent-foreground left-2 data-[state=open]:rotate-90"
                                        showOnHover
                                    >
                                        <ChevronRight />
                                    </SidebarMenuAction>
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                    <SidebarMenuSub>
                                        {task.subtasks.map((subtask) => (
                                            <SidebarMenuSubItem key={subtask.name}>
                                                <SidebarMenuSubButton asChild>
                                                    <a href="#">
                                                        <span>{subtask.emoji}</span>
                                                        <span>{subtask.name}</span>
                                                    </a>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                        ))}
                                    </SidebarMenuSub>
                                </CollapsibleContent>
                            </SidebarMenuItem>
                        </Collapsible>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}
