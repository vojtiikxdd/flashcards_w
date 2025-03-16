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
        <main className="min-h-screen boxBgLightGrey1 border-dashed border-2 border-[#252525d8] rounded-xl text-white m-14 p-6">
            <p>
                redirecting to home in {timeLeft}   
                <Check size={25} className="rounded-full bg-[#01dc64]" />
            </p>
        </main>
    );
}