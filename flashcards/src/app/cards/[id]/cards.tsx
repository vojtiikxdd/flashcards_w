"use client";

import { ArrowLeft, Trash2, FilePenLine } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { SelectTraining, SelectTrainingHorizontal } from "@/components/cardsPreview/selectTraining";

export default function Cards({ cards }: {
    cards: {
        user_id: string;
        f_name: string;
        description: string;
        list: {
            question: string;
            answer: string;
        }[]
    }
}) {
    const answers = cards.list.map((item) => item.answer);
    const questions = cards.list.map((item) => item.question);
    const numbers = questions.map((_, index) => index + 1).slice(0, -1);

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
                    className="flex flex-row w-[126px] select-none buttonBlue p-2 rounded-full ml-6 mb-4 text-white ease-in-out duration-200 gap-2 shadow-[0px_1px_6px_rgba(25,25,25,1)] outline-none focus:outline-none"
                >
                    <ArrowLeft size={25} className="rounded-full bg-[#59b3f0]" />
                    Go back!
                </a>
            </div>

            <div className="flex flex-row w-[84%] h-[32rem] mt-4 align-middle justify-center gap-[68px]">
                <SelectTrainingHorizontal />
                <div>
                    <div className="flex flex-row w-full justify-between items-center">
                        <div className="flex flex-col h-auto justify-start items-cente">
                            <h1 className="text-white font-bold text-2xl pl-4 pt-3">
                                {cards.f_name}
                            </h1>
                            <p className="text-[#a9a9a9] pl-6 pb-3">
                                {cards.description}
                            </p>
                        </div>
                        <div className="flex flex-row w-auto justify-end items-center gap-4 mr-2">
                            <Trash2
                                style={{ color: "white", transition: "color 0.2s" }}
                                onMouseEnter={(e) => e.currentTarget.style.color = "#f60a09"}
                                onMouseLeave={(e) => e.currentTarget.style.color = "white"}
                                size={30}
                            />
                            <FilePenLine color="white" size={30} />
                        </div>
                    </div>
                    <Carousel
                        className="text-white text-center flex mx-auto items-center justify-center border-2 border-[#ffffff60] border-dashed rounded-3xl w-[45rem] h-[26rem] bg-[#121212] shadow-[0px_1px_6px_rgba(25,25,25,1)]"
                    >
                        <CarouselContent
                            onTouchStart={handleCarouselMove} // For mobile interface
                            onMouseDown={handleCarouselMove}  // For desktop interface
                            className="flex w-full h-full"
                        >
                            {numbers.map((index) => (
                                <CarouselItem
                                    key={index}
                                    className="flex carousel-item w-full h-full"
                                >
                                    <ReactCardFlip
                                        isFlipped={!!flipStates[index]}
                                        flipDirection="vertical"
                                        containerClassName="items-center justify-center"
                                    >
                                        {/* Predná strana */}
                                        <p className={`text-lg flex text-white flex-wrap justify-center items-center align-middle w-[720px] max-w-[720px] h-full whitespace-normal ${questions[index]?.includes(" ") ? "break-words" : "break-all"} px-12 py-8 cursor-pointer`}
                                            onClick={() => handleFlip(index)}
                                        >
                                            {questions[index]}
                                        </p>

                                        {/* Zadná strana */}
                                        <p className={`text-lg text-white flex flex-wrap justify-center items-center align-middle w-[720px] max-w-[720px] h-full whitespace-normal break-all ${questions[index]?.includes(" ") ? "break-words" : "break-all"} px-12 py-8 cursor-pointer`}
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
                            <CarouselPrevious className="-left-12" />
                            <CarouselNext />
                        </div>
                    </Carousel>
                </div>
            </div>
            {/* <SelectTraining /> */}
        </main>
    );
}