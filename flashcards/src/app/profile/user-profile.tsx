"use client";

import { useState } from "react";
import { Bolt, UserPen, LogOut, ArrowLeft } from "lucide-react";
import { User } from "@/utils/schemas";
import { signOut } from "@/utils/supabase/actions";
import { supabase } from "@/utils/supabase/client";

export default function UserProfile({ user }: { user: User }) {
    const [isEditing, setIsEditing] = useState(false);
    const [nickname, setNickname] = useState(user?.username || "Unknown User");
    const [email, setEmail] = useState(user?.email || "");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSave = async () => {
        if (!nickname.trim()) {
            setError("Name must be filled!");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const { data: profileData, error: profileError } = await supabase
                .from("profiles")
                .update({ username: nickname })
                .eq("id", user.id)
                .select();

            if (profileError) throw new Error(`Error updating profile: ${profileError.message}`);

            setIsEditing(false);
        } catch (err) {
            console.error("Error:", err);

            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Unknown saving data error!");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className={`absolute top-[48%] left-1/2 -translate-y-1/2 -translate-x-1/2 border-2 border-[#252525d8] border-dashed rounded-3xl w-[40rem] ${isEditing ? "h-[26rem]" : "h-[24rem]"} wrapBoxBgColor shadow-lg flex flex-col items-center p-10 ease-in-out duration-200`}>
            <a href="/"
                className="top-4 left-4 flex flex-row items-center buttonBlue p-2 mb-8 rounded-full text-white ease-in-out duration-200 gap-2 absolute shadow-[0px_1px_6px_rgba(25,25,25,1)]"
            >
                <ArrowLeft size={25} className="rounded-full bg-[#59b3f0]" />
                Go back!
            </a>
            <div className="border-4 border-[#ffffff40] rounded-full bg-[#000] w-28 h-28 flex justify-center items-center text-5xl font-bold text-white shadow-md">
                {nickname.charAt(0)}
            </div>

            {isEditing ? (
                <div className="mt-5 flex flex-col items-center w-full">
                    <input
                        type="text"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                        className="mt-2 px-4 py-2 w-3/4 text-xl text-center text-white bg-[#202020] border border-[#868686] hover:border-[#b0b0b0] rounded-lg focus:outline-none focus:border-none focus:outline-[#5e25da] ease-in-out duration-200"
                        placeholder="Username"
                    />
                    {email && <p className="mt-1 text-lg text-[#ffffff90]">{email}</p>}

                    {error && <p className="text-red-500 mt-2">{error}</p>}

                    <div className="mt-5 flex gap-4">
                        <button
                            onClick={handleSave}
                            className={`select-none flex flex-row gap-2 px-4 py-2 text-lg font-semibold rounded-full ease-in-out duration-200 ${nickname.trim() && !loading
                                ? "bg-[#5e25da] text-white hover:bg-[#5122c0]"
                                : "bg-gray-500 text-gray-300 cursor-not-allowed"
                                }`}
                            disabled={!nickname.trim() || loading}
                        >
                            {loading && <Bolt size={20} className="animate-spin" />}
                            {loading ? "Saving..." : "Save"}
                        </button>
                        <button
                            onClick={() => {
                                setIsEditing(false);
                                setNickname(user?.username || "Unknown User");
                                setEmail(user?.email || "");
                                setError("");
                            }}
                            className="px-6 select-none py-2 bg-gray-600 text-white text-lg font-semibold rounded-full hover:bg-[#414142] ease-in-out duration-200"
                        >
                            Cancel
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
                            className="px-3 py-2 select-none bg-[#0f3dbc] rounded-full text-white text-lg font-semibold hover:bg-[#0c3299] ease-in-out duration-200 flex gap-2 items-center"
                        >
                            <UserPen size={30} className="p-1 bg-[#2e5dde] rounded-full" />
                            Edit
                        </button>
                        <button
                            onClick={() => signOut()}
                            className="px-3 py-2 select-none flex flex-row gap-2 bg-[#dd2828] text-white text-lg font-semibold rounded-full hover:bg-[#ba1717] ease-out duration-200"
                        >
                            Log out
                            <LogOut size={30} className="p-1 bg-[#ff4343] rounded-full" />
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
}
