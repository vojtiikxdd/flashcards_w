"use client";
import { useState } from "react";
import FlashcardEntry from "@/components/flashcardEntry";
import { Input } from "@/components/inputCreateNew";

export default function FlashcardEditor() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="min-h-screen bg-[#1a1330] rounded-xl text-white m-6 p-4 ">
            {/* Title Input */}
            <div className="bg-gray-800 p-1 rounded-lg items-start">
                <Input id="title" label="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>

            {/* Description Input */}
            <div className="bg-gray-800 p-1 rounded-lg items-start mt-4">
                <Input id="description" label="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>

            <FlashcardEntry />
        </div>
    );
}
