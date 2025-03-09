import { User } from "@/utils/schemas";

import Link from "next/link";
import { Plus } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { FlashcardsBox } from "@/components/flashcardsBox";
import { TypewriterEff } from "@/components/typewriteEffHomapage";

export default function Home({ user }: { user: User | string }) {
    const session = typeof user === 'object';

    if (typeof user === 'object') console.log(user.nickname); //undefined ????

    return (
        <main className="flex flex-1 flex-col">
            {session ? (
                <div className="flex flex-col w-full m-auto justify-center items-center">
                    <p className="text-[#fff] text-4xl font-medium relative my-20">
                        Welcome back, {user.nickname} <span className="italic text-red-400">name</span><span className="bg-clip-text from-[#5e25da] to-[#da25d4] bg-gradient-to-r text-transparent font-bold duration-200 transition-all ease-in-out">{user.nickname}</span>! <br />Wanna study sum?
                    </p>
                    <div className="self-start justify-between ml-8">
                        <p className="font-bold text-xl mb-4 text-white RecentFlshcrdBoxLabel">Recent flashcards</p>
                        <div className="flex flex-row flex-wrap ml-4">
                            <a href="/cards">
                                <FlashcardsBox />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-row my-8 ml-12 self-start ">
                        <Link href={"/createNew"} className="flex flex-row items-center buttonBlue text-[#fff] text-lg font-bold px-2 py-1 rounded-3xl duration-200 transition-all ease-in-out">
                            <Plus size={30} className="pr-1" />
                            Create new!
                        </Link>
                        <Link href="/myFlashcards" className="flex flex-row items-center buttonYellow text-[#fff] text-lg px-2 py-1 pl-3 font-bold rounded-3xl duration-200 transition-all ease-in-out ml-4">
                            My Flashcards
                            <ArrowRight />
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 m-auto justify-center items-center">
                    <p className="text-[#fff] text-5xl font-medium relative">
                        <Link href="/login" className="bg-clip-text from-[#2592da] font-semibold to-[#da25d4] bg-gradient-to-r text-transparent hover:font-[900] duration-200 transition-all ease-in-out">
                            Log-in
                        </Link> and start learning with FlashCards!
                    </p>
                    <TypewriterEff />
                </div>
            )}
        </main>
    )
}
