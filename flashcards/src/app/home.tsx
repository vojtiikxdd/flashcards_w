"use client";

import { User } from "@/utils/schemas";

import Link from "next/link";
import { ChevronRight, Plus } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { FlashcardBox } from "@/components/flashcardsBox";
import { TypewriterEff } from "@/components/typewriteEffHomapage";
import { useEffect } from "react";
import { useState } from "react";
import { getFlashcardOfUser, setLastOpened } from "@/utils/supabase/actions";

export default function Home({ user }: { user: User | string }) {
    const session = !!user && typeof user === 'object';
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        (async () => {
            const res = await getFlashcardOfUser();
            console.log(res);

            setDataLoaded(res !== undefined && res.length > 0);
        })();
    }, []);

    return (
        <main className="flex flex-1 flex-col">
            {session ? (
                <div className="flex flex-col w-full m-auto justify-center items-center">
                    {dataLoaded ? (
                        <p className="text-[#fff] text-4xl font-medium relative my-20">
                            Welcome back, {" "}
                            <span className="bg-clip-text from-[#2592da] to-[#dc10e7] bg-gradient-to-r text-transparent font-bold duration-200 transition-all ease-in-out">
                                {(user as User).username}
                            </span>
                            !
                            <br />
                            Wanna study sum?
                        </p>
                    ) : (
                        <p className="text-[#fff] text-4xl font-medium relative my-20">
                            Hey there, {" "}
                            <span className="bg-clip-text from-[#2592da] to-[#dc10e7] bg-gradient-to-r text-transparent font-bold duration-200 transition-all ease-in-out">
                                {(user as User).username}
                            </span>
                            !
                        </p >
                    )}
                    <div className="flex flex-col w-full mx-auto justify-center items-center">
                        {dataLoaded ? (
                            <div className="self-start justify-between ml-8">
                                <p className="font-bold text-xl mb-4 ml-2 text-white border-b border-1 border-[#686868]">
                                    Recent flashcards
                                </p>
                                <FlashcardBox />
                            </div>
                        ) : (
                            <div className="flex flex-col items-center self-middle justify-center mt-10 border-l-2 border-solid border-[#686868] pl-8">
                                <p className="text-white text-2xl">
                                    Seems like you haven't 
                                    <span className="bg-clip-text from-[#25adda] to-[#0165e9] bg-gradient-to-r text-transparent font-bold">
                                        created
                                    </span>
                                    any Flashcards, wanna try it?
                                </p>
                                <div className="flex flex-row justify-center items-center mt-4 ">
                                    <ChevronRight color="white" />
                                    <Link href={"/createNew"} className="text-white text-3xl font-bold  ease-in-out duration-300 hover:text-[#c1fff5]">
                                        Create new!
                                    </Link>
                                </div>
                            </div>
                        )}
                        {dataLoaded &&
                            <div className={`${dataLoaded ? "!self-start" : "self-center"} flex flex-row my-8 ml-12 self-start`}>
                                <Link href={"/createNew"} className="select-none flex gap-1 flex-row items-center buttonBlue text-[#fff] px-2 py-2 rounded-3xl duration-200 transition-all ease-in-out shadow-[0px_1px_6px_rgba(25,25,25,1)]">
                                    <Plus size={25} className="rounded-full bg-[#59b3f0]" />
                                    Create new!
                                </Link>

                                {/*need to make this a Link so its good to redirect */}

                                <div className="cursor-not-allowed flex flex-row select-none items-center buttonYellow text-[#fff] px-2 py-1 gap-1 rounded-3xl duration-200 transition-all ease-in-out ml-4 shadow-[0px_1px_6px_rgba(25,25,25,1)]">
                                    My Flashcards
                                    <ArrowRight size={25} className="rounded-full bg-[#ffcb48]" />
                                </div>
                            </div>
                        }
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
        </main >
    )
}
