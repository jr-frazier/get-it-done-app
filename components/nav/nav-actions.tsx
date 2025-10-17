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
    const [isOpen, setIsOpen] = React.useState(false)
    const currentDate = format(new Date(), "MMM dd yyyy");

    React.useEffect(() => {
        setIsOpen(true)
    }, [])


    return (
        <div className="flex items-center gap-5 text-sm">
            <div className="text-muted-foreground hidden font-medium md:inline-block">
                {currentDate}
            </div>
               <SignedIn>
                   <UserButton />
               </SignedIn>


            {/*<Popover open={isOpen} onOpenChange={setIsOpen}>*/}
            {/*    <PopoverTrigger asChild>*/}
            {/*        <Button*/}
            {/*            variant="ghost"*/}
            {/*            size="icon"*/}
            {/*            className="data-[state=open]:bg-accent h-7 w-7"*/}
            {/*        >*/}
            {/*            <MoreHorizontal/>*/}
            {/*        </Button>*/}
            {/*    </PopoverTrigger>*/}
            {/*    /!*<PopoverContent*!/*/}
            {/*    /!*    className="w-56 overflow-hidden rounded-lg p-0"*!/*/}
            {/*    /!*    align="end"*!/*/}
            {/*    /!*>*!/*/}
            {/*    /!*    /!*<Sidebar collapsible="none" className="bg-transparent">*!/*!/*/}
            {/*    /!*    /!*    /!*<SidebarContent>*!/*!/*!/*/}
            {/*    /!*    /!*    /!*    /!*{data.map((group, index) => (*!/*!/*!/*!/*/}
            {/*    /!*    /!*    /!*    /!*    <SidebarGroup key={index} className="border-b last:border-none">*!/*!/*!/*!/*/}
            {/*    /!*    /!*    /!*    /!*        <SidebarGroupContent className="gap-0">*!/*!/*!/*!/*/}
            {/*    /!*    /!*    /!*    /!*            <SidebarMenu>*!/*!/*!/*!/*/}
            {/*    /!*    /!*    /!*    /!*                /!*{group.map((item, index) => (*!/*!/*!/*!/*!/*/}
            {/*    /!*    /!*    /!*    /!*                /!*    <SidebarMenuItem key={index}>*!/*!/*!/*!/*!/*/}
            {/*    /!*    /!*    /!*    /!*                /!*        <SidebarMenuButton>*!/*!/*!/*!/*!/*/}
            {/*    /!*    /!*    /!*    /!*                /!*            <item.icon/>*!/*!/*!/*!/*!/*/}
            {/*    /!*    /!*    /!*    /!*                /!*            <span>{item.label}</span>*!/*!/*!/*!/*!/*/}
            {/*    /!*    /!*    /!*    /!*                /!*        </SidebarMenuButton>*!/*!/*!/*!/*!/*/}
            {/*    /!*    /!*    /!*    /!*                /!*    </SidebarMenuItem>*!/*!/*!/*!/*!/*/}
            {/*    /!*    /!*    /!*    /!*                /!*))}*!/*!/*!/*!/*!/*/}
            {/*    /!*    /!*    /!*    /!*            </SidebarMenu>*!/*!/*!/*!/*/}
            {/*    /!*    /!*    /!*    /!*        </SidebarGroupContent>*!/*!/*!/*!/*/}
            {/*    /!*    /!*    /!*    /!*    </SidebarGroup>*!/*!/*!/*!/*/}
            {/*    /!*    /!*    /!*    /!*))}*!/*!/*!/*!/*/}
            {/*    /!*    /!*    /!*</SidebarContent>*!/*!/*!/*/}
            {/*    /!*    /!*</Sidebar>*!/*!/*/}
            {/*    /!*</PopoverContent>*!/*/}
            {/*</Popover>*/}
        </div>
    )
}
