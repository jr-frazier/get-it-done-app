// This is sample data.
import {AudioWaveform, Command,} from "lucide-react"
import {IconName} from "lucide-react/dynamic";
import {z} from "zod";
import {projectSchema} from "@/schema/projects";
import {taskSchema} from "@/schema/task";

type Project = {
    name: string
    logo:  IconName
}

export const projectData: z.infer<typeof projectSchema>[] = [
    {
        id: 1,
        name: "Acme Inc",
        description: "New Project 1",
        logo: "command",
    },
    {
        id: 2,
        name: "Acme Corp.",
        description: "New Project 2",
        logo: "audio-waveform",
    },
    {
        id: 3,
        name: "Evil Corp.",
        description: "New Project 3",
        logo: "command",
    },
]


export const tasksData: z.infer<typeof taskSchema>[] = [
    {
        id: 1,
        name: "Personal Life Management",
        emoji: "🏠",
        description: "Manage your daily routine, health, and well-being.",
        completed: false,
        createdDate: "2024-01-01",
        updatedDate: "2024-01-01",
        subtasks: [
            {
                id: 1,
                name: "Daily Journal & Reflection",
                emoji: "📔",
                description: "Manage your daily routine, health, and well-being.",
                completed: false,
                createdDate: "2024-01-01",
                updatedDate: "2024-01-01",
            },
            {
                id: 2,
                name: "Health & Wellness Tracker",
                emoji: "🍏",
                description: "Manage your daily routine, health, and well-being.",
                completed: false,
                createdDate: "2024-01-01",
                updatedDate: "2024-01-01",
            },
            {
                id: 3,
                name: "Personal Growth & Learning Goals",
                emoji: "🌟",
                description: "Manage your daily routine, health, and well-being.",
                completed: false,
                createdDate: "2024-01-01",
                updatedDate: "2024-01-01",
            },
        ],
    },
    {
        id: 2,
        name: "Professional Development",
        emoji: "💼",
        description: "Manage your daily routine, health, and well-being.",
        completed: false,
        createdDate: "2024-01-01",
        updatedDate: "2024-01-01",
        subtasks: [
            {
                id: 1,
                name: "Career Objectives & Milestones",
                emoji: "🎯",
                description: "Manage your daily routine, health, and well-being.",
                completed: false,
                createdDate: "2024-01-01",
                updatedDate: "2024-01-01",
            },
            {
                id: 2,
                name: "Skill Acquisition & Training Log",
                emoji: "🧠",
                description: "Manage your daily routine, health, and well-being.",
                completed: false,
                createdDate: "2024-01-01",
                updatedDate: "2024-01-01",
            },
            {
                id: 3,
                name: "Networking Contacts & Events",
                emoji: "🤝",
                description: "Manage your daily routine, health, and well-being.",
                completed: false,
                createdDate: "2024-01-01",
                updatedDate: "2024-01-01",
            },
        ],
    },
    {
        id: 3,
        name: "Creative Projects",
        emoji: "🎨",
        description: "Manage your daily routine, health, and well-being.",
        completed: false,
        createdDate: "2024-01-01",
        updatedDate: "2024-01-01",
        subtasks: [
            {
                id: 1,
                name: "Writing Ideas & Story Outlines",
                emoji: "✍️",
                description: "Manage your daily routine, health, and well-being.",
                completed: false,
                createdDate: "2024-01-01",
                updatedDate: "2024-01-01",
            },
            {
                id: 2,
                name: "Art & Design Portfolio",
                emoji: "🖼️",
                description: "Manage your daily routine, health, and well-being.",
                completed: false,
                createdDate: "2024-01-01",
                updatedDate: "2024-01-01",
            },
            {
                id: 3,
                name: "Music Composition & Practice Log",
                emoji: "🎵",
                description: "Manage your daily routine, health, and well-being.",
                completed: false,
                createdDate: "2024-01-01",
                updatedDate: "2024-01-01",
            },
        ],
    },
    {
        id: 4,
        name: "Home Management",
        emoji: "🏡",
        description: "Manage your daily routine, health, and well-being.",
        completed: false,
        createdDate: "2024-01-01",
        updatedDate: "2024-01-01",
        subtasks: [
            {
                id: 1,
                name: "Household Budget & Expense Tracking",
                emoji: "💰",
                description: "Manage your daily routine, health, and well-being.",
                completed: false,
                createdDate: "2024-01-01",
                updatedDate: "2024-01-01",
            },
            {
                id: 2,
                name: "Home Maintenance Schedule & Tasks",
                emoji: "🔧",
                description: "Manage your daily routine, health, and well-being.",
                completed: false,
                createdDate: "2024-01-01",
                updatedDate: "2024-01-01",
            },
            {
                id: 3,
                name: "Family Calendar & Event Planning",
                emoji: "📅",
                description: "Manage your daily routine, health, and well-being.",
                completed: false,
                createdDate: "2024-01-01",
                updatedDate: "2024-01-01",
            },
        ],
    },
    {
        id: 5,
        name: "Travel & Adventure",
        emoji: "🧳",
        description: "Manage your daily routine, health, and well-being.",
        completed: false,
        createdDate: "2024-01-01",
        updatedDate: "2024-01-01",
        subtasks: [
            {
                id: 1,
                name: "Trip Planning & Itineraries",
                emoji: "🗺️",
                description: "Manage your daily routine, health, and well-being.",
                completed: false,
                createdDate: "2024-01-01",
                updatedDate: "2024-01-01",
            },
            {
                id: 2,
                name: "Travel Bucket List & Inspiration",
                emoji: "🌎",
                description: "Manage your daily routine, health, and well-being.",
                completed: false,
                createdDate: "2024-01-01",
                updatedDate: "2024-01-01",
            },
            {
                id: 3,
                name: "Travel Journal & Photo Gallery",
                emoji: "📸",
                description: "Manage your daily routine, health, and well-being.",
                completed: false,
                createdDate: "2024-01-01",
                updatedDate: "2024-01-01",
            },
        ],
    },
]