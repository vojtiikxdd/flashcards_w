"use client";
import { useState } from "react";
// import { FaPlus } from "lucide-react";

export default function FlashcardEditor() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
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

   

      {/* Flashcard Entry */}
      <div className="bg-gray-800 p-4 rounded-lg mt-4">
        <div className="flex justify-between items-center">
          <span className="text-lg">1</span>
          <button className="bg-purple-600 px-4 py-1 rounded-md">Ask Kai</button>
        </div>
        <div className="border-t border-gray-700 mt-2 pt-2">
          <textarea
            placeholder="Term"
            className="w-full bg-gray-700 p-2 rounded-md text-white"
          ></textarea>
          <textarea
            placeholder="Definition"
            className="w-full bg-gray-700 p-2 rounded-md text-white mt-2"
          ></textarea>
        </div>

           {/* Kulaté tlačítko s plusem */}
      <div className="flex justify-center mt-4">
        <button className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg">
        {/* <FaPlus size={20} /> */}
        </button>
      </div>
      </div>
    </div>
  );
}
