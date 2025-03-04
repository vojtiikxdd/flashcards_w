
"use client";

import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";



export default function Cards() {

    const [flip, setFlip] = useState(false);
    
  const numbers = Array.from({ length: 10 }, (_, i) => i + 1); // [1, 2, ..., 10]
  const answers = numbers.map((num) => `Odpověď ${num}`); // ["Odpověď 1", ..., "Odpověď 10"]
  const [clickedIndex, setClickedIndex] = React.useState<number | null>(null);

  const handleClick = (index: number) => {
    setClickedIndex(clickedIndex === index ? null : index);
  };

  return (
    <main>
      <Carousel className="text-white text-center flex absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 m-auto justify-center items-center border-2 border-[#ffffff60] border-dashed rounded-3xl w-[55rem] h-[30rem]">
        <CarouselContent>
          {numbers.map((num, index) => (
            <CarouselItem
              key={index}
              className="carousel-item w-full p-4 cursor-pointer"
              onClick={() => handleClick(index)}
            >
            
            <ReactCardFlip isFlipped={flip} 
            flipDirection="vertical">
            <p className=" text-lg w-full whitespace-normal break-words p-20"
                 onClick={() => setFlip(!flip)}>
                    Položka {num} 
            </p>

            <p className=" text-lg w-full whitespace-normal break-words p-20"
                 onClick={() => setFlip(!flip)}>
                    {answers[index]}
            </p>
            
        </ReactCardFlip>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious/>
        <CarouselNext />
      </Carousel>
    </main>
  );
}
