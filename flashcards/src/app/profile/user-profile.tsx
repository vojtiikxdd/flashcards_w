"use client";

import { useState } from "react";
import { User } from "@/utils/schemas";
import { signOut } from "@/utils/supabase/actions";

export default function UserProfile({ user }: { user: User }) {
  const [isEditing, setIsEditing] = useState(false);
  const [nickname, setNickname] = useState(user?.username || "Unknown User");
  const [email, setEmail] = useState(user?.email || "");
  const [error, setError] = useState("");

  const handleSave = () => {
    if (!nickname.trim()) {
      setError("Jméno nesmí být prázdné!");
      return;
    }
    setError("");
    setIsEditing(false);
  };

  return (
    <main className="flex justify-center items-center min-h-screen bg-[#121212]">
      <div className="relative border border-[#ffffff30] rounded-3xl w-[40rem] h-[28rem] bg-[#1f1f1f] shadow-lg flex flex-col items-center p-10">
        
        {/* Profilová ikonka */}
        <div className="border-4 border-[#ffffff40] rounded-full bg-[#000] w-28 h-28 flex justify-center items-center text-5xl font-bold text-white shadow-md">
          {nickname.charAt(0)}
        </div>

        {/* Obsah profilu */}
        {isEditing ? (
          // EDITAČNÍ REŽIM
          <div className="mt-5 flex flex-col items-center w-full">
            <input
              type="text"
              value={nickname}
              onChange={(e) => {
                setNickname(e.target.value);
                if (e.target.value.trim()) setError(""); // Reset error při zadání textu
              }}
              className="mt-2 px-4 py-2 w-3/4 text-xl text-center text-white bg-[#333] border border-[#ffffff40] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5e25da]"
              placeholder="Zadej jméno"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-3 px-4 py-2 w-3/4 text-lg text-center text-white bg-[#333] border border-[#ffffff40] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5e25da]"
              placeholder="Zadej e-mail"
            />

            {/* Chybová zpráva */}
            {error && <p className="text-red-500 mt-2">{error}</p>}

            {/* Tlačítka Uložit a Zrušit */}
            <div className="mt-5 flex gap-4">
              <button
                onClick={handleSave}
                className={`px-6 py-2 text-lg font-semibold rounded-lg transition-all ${
                  nickname.trim()
                    ? "bg-[#5e25da] text-white hover:bg-[#7a40ff]"
                    : "bg-gray-500 text-gray-300 cursor-not-allowed"
                }`}
                disabled={!nickname.trim()}
              >
                Uložit
              </button>
              <button
                onClick={() => {
                  setIsEditing(false);
                  setNickname(user?.username || "Unknown User");
                  setError("");
                }}
                className="px-6 py-2 bg-gray-600 text-white text-lg font-semibold rounded-lg hover:bg-gray-500 transition-all"
              >
                Zrušit
              </button>
            </div>
          </div>
        ) : (
          // ZOBRAZENÍ DAT
          <div className="mt-5 text-center">
            <h2 className="text-3xl font-semibold text-white">{nickname}</h2>
            {email && <p className="mt-1 text-lg text-[#ffffff90]">{email}</p>}

            {/* Tlačítka Upravit a Odhlásit */}
            <div className="mt-5 flex gap-4">
              <button
                onClick={() => setIsEditing(true)}
                className="px-6 py-2 bg-[#2592da] text-white text-lg font-semibold rounded-lg hover:bg-[#1a75b8] transition-all"
              >
                Upravit
              </button>
              <button
                onClick={() => signOut()}
                className="px-6 py-2 bg-[#ff5555] text-white text-lg font-semibold rounded-lg hover:bg-[#ff3333] transition-all"
              >
                Odhlásit se
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
