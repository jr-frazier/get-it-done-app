// This is sample data.
import {AudioWaveform, Command,} from "lucide-react"
import {IconName} from "lucide-react/dynamic";

type Project = {
    name: string
    logo:  IconName
    plan: string
}

export const projectData: Project[] = [
    {
        name: "Acme Inc",
        logo: "command",
        plan: "Enterprise",
    },
    {
        name: "Acme Corp.",
        logo: "audio-waveform",
        plan: "Startup",
    },
    {
        name: "Evil Corp.",
        logo: "command",
        plan: "Free",
    },
]


export const tasksData = [
    {
        name: "Personal Life Management",
        emoji: "🏠",
        subtasks: [
            {
                name: "Daily Journal & Reflection",
                url: "#",
                emoji: "📔",
            },
            {
                name: "Health & Wellness Tracker",
                url: "#",
                emoji: "🍏",
            },
            {
                name: "Personal Growth & Learning Goals",
                url: "#",
                emoji: "🌟",
            },
        ],
    },
    {
        name: "Professional Development",
        emoji: "💼",
        subtasks: [
            {
                name: "Career Objectives & Milestones",
                url: "#",
                emoji: "🎯",
            },
            {
                name: "Skill Acquisition & Training Log",
                url: "#",
                emoji: "🧠",
            },
            {
                name: "Networking Contacts & Events",
                url: "#",
                emoji: "🤝",
            },
        ],
    },
    {
        name: "Creative Projects",
        emoji: "🎨",
        subtasks: [
            {
                name: "Writing Ideas & Story Outlines",
                url: "#",
                emoji: "✍️",
            },
            {
                name: "Art & Design Portfolio",
                url: "#",
                emoji: "🖼️",
            },
            {
                name: "Music Composition & Practice Log",
                url: "#",
                emoji: "🎵",
            },
        ],
    },
    {
        name: "Home Management",
        emoji: "🏡",
        subtasks: [
            {
                name: "Household Budget & Expense Tracking",
                url: "#",
                emoji: "💰",
            },
            {
                name: "Home Maintenance Schedule & Tasks",
                url: "#",
                emoji: "🔧",
            },
            {
                name: "Family Calendar & Event Planning",
                url: "#",
                emoji: "📅",
            },
        ],
    },
    {
        name: "Travel & Adventure",
        emoji: "🧳",
        subtasks: [
            {
                name: "Trip Planning & Itineraries",
                url: "#",
                emoji: "🗺️",
            },
            {
                name: "Travel Bucket List & Inspiration",
                url: "#",
                emoji: "🌎",
            },
            {
                name: "Travel Journal & Photo Gallery",
                url: "#",
                emoji: "📸",
            },
        ],
    },
]