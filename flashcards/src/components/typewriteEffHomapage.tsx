"use client";

import { useState, useEffect } from "react";

export function TypewriterEff() {

    // Seznam vět pro přepisování
    const messages = [
        "Learn something new every day.",
        "Discover, explore, and have fun learning!",
        "Unlock your full potential with knowledge.",
        "It's not about speed, but about never stopping.",
        "Take the first step on your learning journey.",
        "Your future starts with new knowledge!",
        "Make learning smart, effective, and fun!",
        "Gain the power of knowledge with every lesson.",
        "Invest in the best thing – yourself!",
        "Embark on an adventure of learning!"
    ];

    const [displayText, setDisplayText] = useState("");
    const [messageIndex, setMessageIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const typingSpeed = 100; // Rychlost psaní (ms)
    const deletingSpeed = 50; // Rychlost mazání (ms)
    const pauseTime = 2000; // Pauza po dopsání věty (ms)

    useEffect(() => {
        const currentMessage = messages[messageIndex];

        if (!isDeleting && charIndex < currentMessage.length) {
            // Píšeme znaky
            setTimeout(() => {
                setDisplayText(currentMessage.substring(0, charIndex + 1));
                setCharIndex((prev) => prev + 1);
            }, typingSpeed);
        } else if (!isDeleting && charIndex === currentMessage.length) {
            // Počkej chvíli a začni mazat
            setTimeout(() => {
                setIsDeleting(true);
            }, pauseTime);
        } else if (isDeleting && charIndex > 0) {
            // Mazání znaků
            setTimeout(() => {
                setDisplayText(currentMessage.substring(0, charIndex - 1));
                setCharIndex((prev) => prev - 1);
            }, deletingSpeed);
        } else if (isDeleting && charIndex === 0) {
            // Přepnutí na další větu
            setIsDeleting(false);
            setMessageIndex((prev) => (prev + 1) % messages.length);
        }
    }, [charIndex, isDeleting, messageIndex, messages]);

    return (
        <div className="flex flex-1 flex-col">
            {/* Typewriter efekt pod hlavní větou */}
            <p className="text-white text-4xl font-semibold mt-6 min-h-[50px] text-center">
                {displayText}
                <span className="text-[#da25d4] animate-blink">|</span>
            </p>
        </div>
    );
}
