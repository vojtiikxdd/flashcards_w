import { User } from "@/utils/schemas";

import Link from "next/link";
import { Plus } from "lucide-react";

export default function Home({ user }: { user: User | string }) {
    const session = typeof user === 'object';
    
    if(typeof user === 'object') console.log(user.nickname); // udefined????
    
    return (
        <main className="flex flex-1 flex-col">
            {session ? (
                <div className="flex flex-col w-full absolute top-1/3 left-1/2 -translate-y-1/2 -translate-x-1/2 m-auto justify-center items-center">
                    <p className="text-[#fff] text-4xl font-medium relative">
                        Welcome back, {user.nickname} <span className="bg-clip-text from-[#256dda] to-[#bc25da] bg-gradient-to-r text-transparent font-bold duration-200 transition-all ease-in-out italic">{user.nickname}name</span>! <br />Wanna study sum?
                    </p>
                    <div className="flex flex-row mt-8 ml-12 self-start ">
                        <Link href={"/createNew"} className="flex flex-row items-center bg-[#2592da] text-[#fff] text-lg px-2 py-1 rounded-3xl duration-200 transition-all ease-in-out hover:bg-[#0874bd]">
                            <Plus size={30} className="pr-1"/>
                            Create new!
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="flex absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 m-auto justify-center items-center">
                    <p className="text-[#fff] text-5xl font-medium relative">
                        <Link href="/login" className="bg-clip-text from-[#2592da] font-semibold to-[#da25d4] bg-gradient-to-r text-transparent hover:font-[900] duration-200 transition-all ease-in-out">
                            Log-in
                        </Link> and start learning with FlashCards!
                    </p>
                </div>
            )}
        </main>
    )
}
