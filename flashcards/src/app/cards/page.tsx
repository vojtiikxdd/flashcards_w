"use client";

import React, { useState, useRef } from "react";
import ReactCardFlip from "react-card-flip";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export default function Cards() {
    const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
    const answers = numbers.map((num) => `Odpověď ${num}`);

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
        <main>
            <Carousel
                className="text-white text-center flex absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 m-auto justify-center items-center border-2 border-[#ffffff60] border-dashed rounded-3xl w-[55rem] h-[30rem]"
            >
                <CarouselContent
                    onTouchStart={handleCarouselMove} // Pri dotyku na mobile
                    onMouseDown={handleCarouselMove}  // Pri stlačení myši na počítači
                >
                    {numbers.map((num, index) => (
                        <CarouselItem key={index} className="carousel-item w-full p-4">
                            <ReactCardFlip isFlipped={!!flipStates[index]} flipDirection="vertical">
                                {/* Predná strana */}
                                <p
                                    className="text-lg w-full whitespace-normal break-words p-20 cursor-pointer"
                                    onClick={() => handleFlip(index)}
                                >
                                    Položka {num}
                                </p>

                                {/* Zadná strana */}
                                <p
                                    className="text-lg w-full whitespace-normal break-words p-20 cursor-pointer"
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
        </main>
    );
}
