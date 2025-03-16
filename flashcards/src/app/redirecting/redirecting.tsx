"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { redirect } from "next/navigation";

export default function Redirecting() {
    const [timeLeft, setTimeLeft] = useState(5);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    redirect("/");
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <main className="absolute h-[300px] w-[580px] p-12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 boxBgLightGrey1 border-dashed border-2 border-[#252525d8] rounded-xl text-white flex flex-col items-center justify-between">
            <div className="text-center text-2xl flex flex-col gap-1">
                <div className="flex flex-row items-center gap-2 justify-center">
                    Creating flashcards <b>successful</b>
                    <Check size={25} color="#01dc64" />
                </div>
                Redirecting to home in {timeLeft}s
            </div>
            <a
                href="/"
                className="text-[#5dbcfc] hover:no-underline underline text-center hover:text-[#c5e7fc] ease-in-out duration-200"
            >
                skip
            </a>
        </main>
    );
}