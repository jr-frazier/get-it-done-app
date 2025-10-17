"use client"

import * as React from "react"
import * as z from "zod"
import {NavTasks} from "@/components/nav/nav-tasks"
import {ProjectSwitcher} from "@/components/nav/project-switcher"
import {Sidebar, SidebarContent, SidebarHeader, SidebarRail,} from "@/components/ui/sidebar"
import {NavCompleted} from "@/components/nav/nav-completed";
import {projectResponseSchema } from "@/schema/projects";
import {taskSchema} from "@/schema/task";
import {Skeleton} from "@/components/ui/skeleton";

interface Props extends React.ComponentProps<typeof Sidebar> {
    projects: z.infer<typeof projectResponseSchema>[]
    tasks: z.infer<typeof taskSchema>[]
    selectedProject?: z.infer<typeof projectResponseSchema>
}


export function AppSidebar({ tasks, projects, selectedProject, ...props}: Props) {
    console.log("SSSSSSSSSSSSSSSSSSSSSsss", selectedProject)
    return (
        <Sidebar className="border-r-0" {...props}>
            <SidebarHeader>
                <ProjectSwitcher projects={projects} selectedProject={selectedProject} />
            </SidebarHeader>
            <SidebarContent>
                <NavTasks tasks={tasks}/>
                <NavCompleted tasks={tasks}/>
            </SidebarContent>
            <SidebarRail/>
        </Sidebar>
    )
}
