"use client"

import * as React from "react"
import {FileText,  Settings2,} from "lucide-react"
import {format} from "date-fns";


import {SignedIn, UserButton} from "@clerk/nextjs";

const data = [
    [
        {
            label: "Customize Page",
            icon: Settings2,
        },
        {
            label: "Turn into wiki",
            icon: FileText,
        },
    ],

]

export function NavActions() {
    const currentDate = format(new Date(), "MMM dd yyyy");


    return (
        <div className="flex items-center gap-5 text-sm">
            <div className="text-muted-foreground hidden font-medium md:inline-block">
                {currentDate}
            </div>
               <SignedIn>
                   <UserButton />
               </SignedIn>
        </div>
    )
}
