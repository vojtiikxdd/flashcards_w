"use client";

import { ArrowLeft } from "lucide-react";
import React, { useState, useRef } from "react";
import ReactCardFlip from "react-card-flip";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { SelectTraining, SelectTrainingHorizontal } from "@/components/cardsPreview/selectTraining";

export default function Cards() {
    const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
    const answers = numbers.map((num) => `Odpověď ${num}`);
    const questions = numbers.map((num) => `Položka ${num}`);

    // Stav bude objekt, kde kľúč je index karty a hodnota je či je otočená
    const [flipStates, setFlipStates] = useState<{ [key: number]: boolean }>({});

    // Pre ukladanie času na zistenie, či bolo kliknuté alebo podržané
    const pressTimer = useRef<any>(null);

    // Funkcia na otočenie karty pri kliknutí
    const handleFlip = (index: number) => {
        setFlipStates((prev) => ({ ...prev, [index]: !prev[index] }));
    };

    // Funkcia na resetovanie všetkých flipov pri zmene karuselu
    const handleCarouselMove = () => {
        setFlipStates({});
    };

    // Funkcia na detekciu dlhého kliknutia (podržania) na zadnej strane
    const handleLongPressStart = (index: number) => {
        // Nastaví časovač pre podržanie
        pressTimer.current = setTimeout(() => {
            setFlipStates((prev) => ({ ...prev, [index]: !prev[index] }));
        });
    };

    return (
        <main className="mx-auto w-[80%] mt-12 mb-10 h-auto px-2 py-4 rounded-3xl boxBgLightGrey1 flex flex-col items-center justify-center">
            <div className="flex w-full justify-start items-center gap-4">
                <a href="/"
                    className="flex flex-row w-[126px] buttonBlue p-2 rounded-full ml-6 mb-4 text-white ease-in-out duration-200 gap-2 shadow-[0px_1px_6px_rgba(25,25,25,1)] outline-none focus:outline-none"
                >
                    <ArrowLeft size={25} className="rounded-full bg-[#59b3f0]" />
                    Go back!
                </a>
            </div>

            <div className="flex flex-row w-[84%] h-[32rem] mt-4 align-middle justify-center gap-[68px]">
                <SelectTrainingHorizontal />
                <div>
                    <div className="flex flex-col h-auto justify-start items-cente">
                        <h1 className="text-white font-bold text-2xl pl-6 py-3">
                            Flashcards - heading
                        </h1>
                    </div>
                    <Carousel
                        className="text-white text-center flex mx-auto items-center border-2 border-[#ffffff60] border-dashed rounded-3xl w-[45rem] h-[26rem] bg-[#121212] shadow-[0px_1px_6px_rgba(25,25,25,1)]"
                    >
                        <CarouselContent
                            onTouchStart={handleCarouselMove} // Pri dotyku na mobile
                            onMouseDown={handleCarouselMove}  // Pri stlačení myši na počítači
                        >
                            {numbers.map((num, index) => (
                                <CarouselItem key={index} className="carousel-item w-full p-4">
                                    <ReactCardFlip isFlipped={!!flipStates[index]} flipDirection="vertical">
                                        {/* Predná strana */}
                                        <p className="text-lg w-full h-full whitespace-normal break-words p-20 cursor-pointer"
                                            onClick={() => handleFlip(index)}
                                        >
                                            {questions[index]}
                                        </p>

                                        {/* Zadná strana */}
                                        <p className="text-lg w-full whitespace-normal break-words p-20 cursor-pointer"
                                            onClick={() => handleFlip(index)}
                                            onMouseDown={() => handleLongPressStart(index)}
                                        >
                                            {answers[index]}
                                        </p>
                                    </ReactCardFlip>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        {/* Obalenie tlačidiel do divu, aby fungovali správne */}
                        <div onClick={handleCarouselMove}>
                            <CarouselPrevious />
                            <CarouselNext />
                        </div>
                    </Carousel>
                </div>    
            </div>
            {/* <SelectTraining /> */}
        </main>
    );
}
