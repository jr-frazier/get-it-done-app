"use client"

import * as React from "react"
import {AudioWaveform, Command,} from "lucide-react"

import {NavTasks} from "@/components/nav/nav-tasks"
import {ProjectSwitcher} from "@/components/nav/project-switcher"
import {Sidebar, SidebarContent, SidebarHeader, SidebarRail,} from "@/components/ui/sidebar"
import {NavCompleted} from "@/components/nav/nav-completed";
import {IconName} from "lucide-react/dynamic";

interface Props extends React.ComponentProps<typeof Sidebar> {
    projects: {
        name: string
        logo: IconName
        plan: string
    }[]
    tasks: {
        name: string
        emoji: React.ReactNode
        subtasks: {
            name: string
            emoji: React.ReactNode
        }[]
    }[]
}

// This is sample data.
// const data = {
//     teams: [
//         {
//             name: "Acme Inc",
//             logo: Command,
//             plan: "Enterprise",
//         },
//         {
//             name: "Acme Corp.",
//             logo: AudioWaveform,
//             plan: "Startup",
//         },
//         {
//             name: "Evil Corp.",
//             logo: Command,
//             plan: "Free",
//         },
//     ],
//
//
//     tasks: [
//         {
//             name: "Personal Life Management",
//             emoji: "🏠",
//             subtasks: [
//                 {
//                     name: "Daily Journal & Reflection",
//                     url: "#",
//                     emoji: "📔",
//                 },
//                 {
//                     name: "Health & Wellness Tracker",
//                     url: "#",
//                     emoji: "🍏",
//                 },
//                 {
//                     name: "Personal Growth & Learning Goals",
//                     url: "#",
//                     emoji: "🌟",
//                 },
//             ],
//         },
//         {
//             name: "Professional Development",
//             emoji: "💼",
//             subtasks: [
//                 {
//                     name: "Career Objectives & Milestones",
//                     url: "#",
//                     emoji: "🎯",
//                 },
//                 {
//                     name: "Skill Acquisition & Training Log",
//                     url: "#",
//                     emoji: "🧠",
//                 },
//                 {
//                     name: "Networking Contacts & Events",
//                     url: "#",
//                     emoji: "🤝",
//                 },
//             ],
//         },
//         {
//             name: "Creative Projects",
//             emoji: "🎨",
//             subtasks: [
//                 {
//                     name: "Writing Ideas & Story Outlines",
//                     url: "#",
//                     emoji: "✍️",
//                 },
//                 {
//                     name: "Art & Design Portfolio",
//                     url: "#",
//                     emoji: "🖼️",
//                 },
//                 {
//                     name: "Music Composition & Practice Log",
//                     url: "#",
//                     emoji: "🎵",
//                 },
//             ],
//         },
//         {
//             name: "Home Management",
//             emoji: "🏡",
//             subtasks: [
//                 {
//                     name: "Household Budget & Expense Tracking",
//                     url: "#",
//                     emoji: "💰",
//                 },
//                 {
//                     name: "Home Maintenance Schedule & Tasks",
//                     url: "#",
//                     emoji: "🔧",
//                 },
//                 {
//                     name: "Family Calendar & Event Planning",
//                     url: "#",
//                     emoji: "📅",
//                 },
//             ],
//         },
//         {
//             name: "Travel & Adventure",
//             emoji: "🧳",
//             subtasks: [
//                 {
//                     name: "Trip Planning & Itineraries",
//                     url: "#",
//                     emoji: "🗺️",
//                 },
//                 {
//                     name: "Travel Bucket List & Inspiration",
//                     url: "#",
//                     emoji: "🌎",
//                 },
//                 {
//                     name: "Travel Journal & Photo Gallery",
//                     url: "#",
//                     emoji: "📸",
//                 },
//             ],
//         },
//     ],
// }

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
