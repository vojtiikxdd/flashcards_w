"use client";
import { useState } from "react";
import FlashcardEntry from "@/components/flashcardEntry";

export default function FlashcardEditor() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="min-h-screen bg-[#1a1330] rounded-xl text-white m-6 p-4 ">
            {/* Title Input */}
            <div className="bg-gray-800 p-4 rounded-lg">
                <label className="block text-gray-400 mb-2">Title</label>
                <input
                    type="text"
                    placeholder='Enter a title, like "Chemistry - Chapter 22: Ions"'
                    className="w-full bg-gray-700 p-2 rounded-md text-white"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            {/* Description and Tags */}
            <div className="bg-gray-800 p-4 rounded-lg mt-4">
                <label className="block text-gray-400 mb-2">Description and Tags</label>
                <input
                    type="text"
                    placeholder="Add a description"
                    className="w-full bg-gray-700 p-2 rounded-md text-white"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div> 

            <FlashcardEntry />
        </div>
    );
}
