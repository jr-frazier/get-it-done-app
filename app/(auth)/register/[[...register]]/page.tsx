import Image from "next/image";
import {SignUp} from "@clerk/nextjs";
import {CalendarCheck} from "lucide-react";


export default function RegisterPage() {
    return (<main className="flex flex-col items-center p-5 gap-10 animate-fade-in ">

        <div className="mt-3">
            <SignUp/>
        </div>
    </main>)
}