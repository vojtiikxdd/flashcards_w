"use client";

import { useState } from "react";
import { User } from "@/utils/schemas";
import { signOut } from "@/utils/supabase/actions";
import { supabase } from "@/utils/supabase/client"; // Import klienta

export default function UserProfile({ user }: { user: User }) {
  const [isEditing, setIsEditing] = useState(false);
  const [nickname, setNickname] = useState(user?.username || "Unknown User");
  const [email, setEmail] = useState(user?.email || "");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    if (!nickname.trim()) {
      setError("Jméno nesmí být prázdné!");
      return;
    }
  
    setLoading(true);
    setError("");
  
    console.log("User ID:", user.id);

    const {
      data,
      error,
      status,
    } = await supabase
      .from("users")
      .update({ username: nickname, email: email })
      .eq("id", user.id)
      .select();
    
    console.log("Data:", data);
    console.log("Error:", error);
    console.log("Status:", status);
  
    setLoading(false);
  
    if (error) {
      setError(`Chyba při ukládání dat: ${error.message}`);
      console.error("Chyba:", error);
      console.error("Status:", status);
    } else {
      console.log("Úspěšně aktualizováno:", data);
      setIsEditing(false);
    }
  };

  return (
    <main className="flex justify-center items-center min-h-screen bg-[#121212]">
      <div className="relative border border-[#ffffff30] rounded-3xl w-[40rem] h-[28rem] bg-[#1f1f1f] shadow-lg flex flex-col items-center p-10">
        
        <div className="border-4 border-[#ffffff40] rounded-full bg-[#000] w-28 h-28 flex justify-center items-center text-5xl font-bold text-white shadow-md">
          {nickname.charAt(0)}
        </div>

        {isEditing ? (
          <div className="mt-5 flex flex-col items-center w-full">
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
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

            {error && <p className="text-red-500 mt-2">{error}</p>}

            <div className="mt-5 flex gap-4">
              <button
                onClick={handleSave}
                className={`px-6 py-2 text-lg font-semibold rounded-lg transition-all ${
                  nickname.trim() && !loading
                    ? "bg-[#5e25da] text-white hover:bg-[#7a40ff]"
                    : "bg-gray-500 text-gray-300 cursor-not-allowed"
                }`}
                disabled={!nickname.trim() || loading}
              >
                {loading ? "Ukládám..." : "Uložit"}
              </button>
              <button
                onClick={() => {
                  setIsEditing(false);
                  setNickname(user?.username || "Unknown User");
                  setEmail(user?.email || "");
                  setError("");
                }}
                className="px-6 py-2 bg-gray-600 text-white text-lg font-semibold rounded-lg hover:bg-gray-500 transition-all"
              >
                Zrušit
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-5 text-center">
            <h2 className="text-3xl font-semibold text-white">{nickname}</h2>
            {email && <p className="mt-1 text-lg text-[#ffffff90]">{email}</p>}

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
