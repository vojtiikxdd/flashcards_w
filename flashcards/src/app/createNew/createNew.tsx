"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";

import FlashcardEntry from "@/components/createNew/flashcardEntry";
import { Input } from "@/components/createNew/inputCreateNew";
import Selection from "@/components/login/selection";
import { handleSubmit } from "@/utils/supabase/actions";
import { redirect } from "next/navigation";
import { ErrorMessage } from "@/components/login/errorMessage";

export default function CreateNew() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [privateFlashcards, setPrivateFlashcards] = useState(true);
    const [questionsList, setQuestionsList] = useState<string[]>([]);
    const [answersList, setAnswersList] = useState<string[]>([]);
    const [showingFullError, setShowingFullError] = useState(false);
    const [error, setError] = useState<string | undefined>();

    return (
        <div className="min-h-screen boxBgLightGrey1 border-dashed border-2 border-[#252525d8] rounded-xl text-white m-14 p-6">
            <div className="flex flex-row items-center justify-between relative mb-6">
                <a href="/"
                    className={`top-3 flex flex-row items-center buttonBlue p-2 rounded-full text-white ease-in-out duration-200 gap-2 absolute shadow-[0px_1px_6px_rgba(25,25,25,1)] ${error ? "mb-2" : "mb-8"}`}
                >
                    <ArrowLeft size={25} className="rounded-full bg-[#59b3f0]" />
                    Go back!
                </a>
                <h1 className="text-2xl mx-auto my-4 font-semibold">Create new flashcards</h1>
            </div>

            <div className="flex justify-center mb-6">
                {error && (
                    <ErrorMessage
                        error={error}
                        showingFullError={showingFullError}
                        setShowingFullError={setShowingFullError}
                        width="w-[730px]"
                        maxTextLength={80}
                    />
                )}
            </div>

            <form onSubmit={async (e) => {
                e.preventDefault();
                const res = await handleSubmit(title, description, privateFlashcards, questionsList, answersList);
                if (res !== undefined) {
                    setError(res);
                } else {
                    redirect("/redirecting");
                }
            }}>
                <div className="flex flex-col items-center p-4 bg-[#202020] rounded-xl w-full">
                    <div className="inputBgLightGrey p-1 rounded-lg items-start w-full">
                        <Input id="title" label="Title" bgcolor="inputBgLightGrey"
                            value={title}
                            onChange={
                                (e) => setTitle(e.target.value)
                            }
                        />
                    </div>
                    <div className="inputBgLightGrey p-1 rounded-lg items-start w-full mt-4">
                        <Input id="description" label="Description" bgcolor="inputBgLightGrey"
                            value={description}
                            onChange={
                                (e) => setDescription(e.target.value)
                            }
                        />
                    </div>
                </div>

                <div className="flex flex-row justify-end m-4 h-6">
                    <Selection
                        defaultVal={privateFlashcards}
                        firstValue="private"
                        secondValue="public"
                        setValue={setPrivateFlashcards}
                        firstColors="selection1Blue"
                        secondColors="selection2Blue"
                    />
                </div>

                <FlashcardEntry
                    bgColor="inputBgLightGrey"
                    txtareaBgCol="txtareaBgLightGrey"
                    setQuestionsList={setQuestionsList}
                    setAnswersList={setAnswersList}
                />
            </form>
        </div>
    );
}
