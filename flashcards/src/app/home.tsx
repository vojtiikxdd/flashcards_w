import { User } from "@/utils/schemas";

import Link from "next/link";
import { Plus } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { FlashcardsBox } from "@/components/flashcardsBox";
import { TypewriterEff } from "@/components/typewriteEffHomapage";

export default function Home({ user }: { user: User | string }) {
    const session = !!user && typeof user === 'object';

    return (
        <main className="flex flex-1 flex-col">
            {session ? (
                <div className="flex flex-col w-full m-auto justify-center items-center">
                    <p className="text-[#fff] text-4xl font-medium relative my-20">
                        Welcome back,, {" "}
                        <span className="bg-clip-text from-[#2592da] to-[#dc10e7] bg-gradient-to-r text-transparent font-bold duration-200 transition-all ease-in-out">
                            {(user as User).username}
                        </span>
                        !
                        <br />
                        Wanna study sum?
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
                        <Link href={"/createNew"} className="flex gap-1 flex-row items-center buttonBlue text-[#fff] px-2 py-2 rounded-3xl duration-200 transition-all ease-in-out shadow-[0px_1px_6px_rgba(25,25,25,1)]">
                            <Plus size={25} className="rounded-full bg-[#59b3f0]" />
                            Create new!
                        </Link>
                        <Link href="/myFlashcards" className="flex flex-row items-center buttonYellow text-[#fff] px-2 py-1 gap-1 rounded-3xl duration-200 transition-all ease-in-out ml-4 shadow-[0px_1px_6px_rgba(25,25,25,1)]">
                            My Flashcards
                            <ArrowRight size={25} className="rounded-full bg-[#ffcb48]" />
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
