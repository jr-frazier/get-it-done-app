import {getProjects} from "@/server/actions/project";
import {getTasks} from "@/server/actions/tasks";
import {auth} from "@clerk/nextjs/server";


export default async function Page() {
    const {userId, redirectToSignIn} = await auth()
    if (!userId) return redirectToSignIn()
    const projects = await getProjects(userId)
    // const tasks = await getTasks()


    return (

        <h1>Dashboard</h1>
    )
}
