"use client"

import * as React from "react"
import * as z from "zod"
import {NavTask} from "@/components/nav/NavTask"
import {ProjectSwitcher} from "@/components/nav/project-switcher"
import {Sidebar, SidebarContent, SidebarHeader, SidebarRail,} from "@/components/ui/sidebar"
import {NavCompleted} from "@/components/nav/NavCompleted";
import {projectResponseSchema } from "@/schema/projects";
import {taskSchema} from "@/schema/task";

interface Props extends React.ComponentProps<typeof Sidebar> {
    projects: z.infer<typeof projectResponseSchema>[]
    tasks: z.infer<typeof taskSchema>[]
    selectedProject?: z.infer<typeof projectResponseSchema>
}


export function AppSidebar({ tasks, projects, selectedProject, ...props}: Props) {
    const listOfCompletedTasks = tasks.filter(task => task.completed)
    const listOfIncompleteTasks = tasks.filter(task => !task.completed)
    return (
        <Sidebar className="border-r-0" {...props}>
            <SidebarHeader>
                <ProjectSwitcher projects={projects} selectedProject={selectedProject} />
            </SidebarHeader>
            <SidebarContent>
                <NavTask tasks={listOfIncompleteTasks}/>
                <NavCompleted tasks={listOfCompletedTasks}/>
            </SidebarContent>
            <SidebarRail/>
        </Sidebar>
    )
}
