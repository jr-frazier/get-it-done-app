
import {auth} from "@clerk/nextjs/server";
import CreateProjectForm from "@/components/forms/project-forms/CreateProjectForm";


export default async function Page() {
    const {userId, redirectToSignIn} = await auth()
    if (!userId) return redirectToSignIn()


    return (
        <CreateProjectForm/>
    )
}
