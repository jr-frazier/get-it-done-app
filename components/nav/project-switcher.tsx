"use client"

import * as React from "react"
import {ChevronDown, Plus} from "lucide-react"
import {z} from "zod"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {SidebarMenu, SidebarMenuButton, SidebarMenuItem,} from "@/components/ui/sidebar"
import {projectResponseSchema} from "@/schema/projects";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {
    projects: z.infer<typeof projectResponseSchema>[]
    selectedProject?: z.infer<typeof projectResponseSchema>
}

export function ProjectSwitcher({projects, selectedProject}: Props
) {
    const [activeProject, setactiveProject] = React.useState<z.infer<typeof projectResponseSchema>>()
    const router = useRouter();
    const defaultMenuItem: z.infer<typeof projectResponseSchema> = {
        name: "Select a project",
        emoji: "⬇️",
        id: "0",
        description: "",
        clerkUserId: "",
        updatedAt: new Date(),
        createdAt: new Date()
    }


    React.useEffect(() => {
        if (selectedProject) {
            setactiveProject(selectedProject)
        } else {
            setactiveProject(defaultMenuItem)
        }

    }, [selectedProject])

    if (projects.length === 0 || !activeProject) {
        return (
            <Button variant="outline" className="w-fit px-1.5" asChild>
                <Link href={"dashboard/add-project"} className="text-muted-foreground font-medium">
                    <Plus className="size-4"/>Add Project
                </Link>
            </Button>
        )
    }

    const handleProjectChange = (project: z.infer<typeof projectResponseSchema>) => {
        setactiveProject(project)
        router.push(`/project/${project.id}`)
    }


    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton className="w-fit px-1.5">
                            <div
                                className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-5 items-center justify-center rounded-md">
                                <span>{activeProject.emoji}</span>
                            </div>
                            <span className="truncate font-medium">{activeProject.name}</span>
                            <ChevronDown className="opacity-50"/>
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-64 rounded-lg"
                        align="start"
                        side="bottom"
                        sideOffset={4}
                    >
                        <DropdownMenuLabel className="text-muted-foreground text-xs">
                            Teams
                        </DropdownMenuLabel>
                        {projects.map((project, index) => {

                            return (<DropdownMenuItem
                                    key={project.name}
                                    onClick={() => handleProjectChange(project)}
                                    className="gap-2 p-2"
                                >
                                    <div className="flex size-6 items-center justify-center rounded-xs border">
                                        <span>{project.emoji}</span>
                                    </div>
                                    {project.name}
                                    <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
                                </DropdownMenuItem>
                            )
                        })}
                        <DropdownMenuSeparator/>
                        <DropdownMenuItem className="gap-2 p-2">
                            <Link href={"/dashboard/add-project"} className="flex w-full items-center gap-2">
                                <div
                                    className="bg-background flex size-6 items-center justify-center rounded-md border">
                                    <Plus className="size-4"/>
                                </div>
                                <div className="text-muted-foreground font-medium">Add Project</div>
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}
