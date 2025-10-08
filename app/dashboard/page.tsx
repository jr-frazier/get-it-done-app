import { AppSidebar } from "@/components/nav/app-sidebar"
import { NavActions } from "@/components/nav/nav-actions"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {getProjects} from "@/server/actions/project";
import {getTasks} from "@/server/actions/tasks";
import Image from "next/image";
import TaskForm from "@/components/forms/TaskForm";


export default async function Page() {
    const projects = await getProjects()
    const tasks = await getTasks()

  return (
    <SidebarProvider>
      <AppSidebar projects={projects.data} tasks={tasks} />
      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center gap-2">
          <div className="flex flex-1 items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage className="line-clamp-1">
                      <Image
                        src="/logo-dark-watermark.svg"
                        alt="logo"
                        width={150}
                        height={150}
                        className="rounded-full"
                      />
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="ml-auto px-3">
            <NavActions />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 px-4 py-10">
            <TaskForm/>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
