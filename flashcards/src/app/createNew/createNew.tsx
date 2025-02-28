"use client";
import { useState } from "react";
import FlashcardEntry from "@/components/flashcardEntry";
import { Input } from "@/components/inputCreateNew";

export default function FlashcardEditor() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="min-h-screen boxBgLightGrey1 border-dashed border-2 border-[#252525d8] rounded-xl text-white m-6 p-4">
            {/* Title Input */}
            <div className="inputBgLightGrey p-1 rounded-lg items-start">
                <Input id="title" label="Title" bgColor="inputBgLightGrey"
                    value={title} 
                    onChange={
                        (e) => setTitle(e.target.value)
                    }
                />
            </div>

            {/* Description Input */}
            <div className="inputBgLightGrey p-1 rounded-lg items-start mt-4">
                <Input id="description" label="Description" bgColor="inputBgLightGrey"
                    value={description} 
                    onChange={
                        (e) => setDescription(e.target.value)
                    }
                />
            </div>

            <FlashcardEntry bgColor="inputBgLightGrey" txtareaBgCol="txtareaBgLightGrey" />
        </div>
    );
}
