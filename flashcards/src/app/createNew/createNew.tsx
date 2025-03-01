"use client";

import { useState } from "react";
import FlashcardEntry from "@/components/createNew/flashcardEntry";
import { Input } from "@/components/createNew/inputCreateNew";


export default function CreateNew() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="min-h-screen boxBgLightGrey1 border-dashed border-2 border-[#252525d8] rounded-xl text-white m-6 p-4">
            <form action="">
                {/* Title Input */}
                <div className="inputBgLightGrey p-1 rounded-lg items-start">
                    <Input id="title" label="Title" bgcolor="inputBgLightGrey"
                        value={title}
                        onChange={
                            (e) => setTitle(e.target.value)
                        }
                    />
                </div>

                {/* Description Input */}
                <div className="inputBgLightGrey p-1 rounded-lg items-start mt-4">
                    <Input id="description" label="Description" bgcolor="inputBgLightGrey"
                        value={description}
                        onChange={
                            (e) => setDescription(e.target.value)
                        }
                    />
                </div>

                <FlashcardEntry bgColor="inputBgLightGrey" txtareaBgCol="txtareaBgLightGrey" />
            </form>
        </div>
    );
}
