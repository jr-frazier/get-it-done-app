import {SignIn} from "@clerk/nextjs";
import Image from "next/image";
import {CalendarCheck} from "lucide-react";

export default function LoginPage() {

    return (
        <main className="flex flex-col items-center p-5 gap-10 animate-fade-in ">

            <div className="mt-3">
                <SignIn/>
            </div>
        </main>
    )
}