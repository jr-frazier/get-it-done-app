"use client"

import * as React from "react"
import * as z from "zod"
import {NavTasks} from "@/components/nav/nav-tasks"
import {ProjectSwitcher} from "@/components/nav/project-switcher"
import {Sidebar, SidebarContent, SidebarHeader, SidebarRail,} from "@/components/ui/sidebar"
import {NavCompleted} from "@/components/nav/nav-completed";
import {projectSchema} from "@/schema/projects";
import {taskSchema} from "@/schema/task";

interface Props extends React.ComponentProps<typeof Sidebar> {
    projects: z.infer<typeof projectSchema>[]
    tasks: z.infer<typeof taskSchema>[]
}


export function AppSidebar({ tasks, projects, ...props}: Props) {
    return (
        <Sidebar className="border-r-0" {...props}>
            <SidebarHeader>
                <ProjectSwitcher projects={projects}/>
            </SidebarHeader>
            <SidebarContent>
                <NavTasks tasks={tasks}/>
                <NavCompleted tasks={tasks}/>
            </SidebarContent>
            <SidebarRail/>
        </Sidebar>
    )
}
