"use client";

import { getFlashcardOfUser } from "@/utils/supabase/actions";
import Link from "next/link";
import { SetStateAction, useEffect, useState } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { setLastOpened } from "@/utils/supabase/actions";

export function FlashcardBox() {
    const [fcs, setFcs] = useState<{ id: string; f_name: string; description: string; }[] | undefined>([]);

    useEffect(() => {
        (async () => {
            const res = await getFlashcardOfUser();
            setFcs(res);
        })();
    }, []);

    function truncateText(text: string, maxLength: number): string {
        return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
    }

    const [isFull, setIsFull] = useState(false);

    useEffect(() => {
        if (fcs?.length === 5) {
            setIsFull(true);
        }
    }, [fcs]);

    return (
        <Carousel opts={{ loop: false, align: "start", slidesToScroll: 1 }} className="ml-8 flex flex-row gap-6 max-w-screen-xl">
            <CarouselContent className={`flex flex-row ${isFull ? "gap-0" : "gap-6"}`}>
                {fcs?.map((fc, index) => (
                    <CarouselItem key={index} className="basis-1/5 flex-shrink-0">
                        <Link href={`/cards/${fc.id}`} onClick={() => setLastOpened(fc.id)} className="flex flex-col w-[220px] h-[160px] gap-2 bg-[#1c1c1c] rounded-3xl border-2 border-dashed border-[#686868] p-4 hover:border-[#969696] transition-colors ease-in-out duration-300 drop-shadow-sm hover:drop-shadow-white cursor-pointer">
                            <p className="text-3xl font-bold text-white max-h-16">{truncateText(fc.f_name, 12)}</p>
                            <p className="text-lg ml-2 text-[#fffb]">
                                {fc.description.includes(" ") ? ((fc.description.indexOf(" ") > 8) ? truncateText(fc.description, 20) : truncateText(fc.description, 14)) : truncateText(fc.description, 22)}
                            </p>
                        </Link>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="-left-10" />
            <CarouselNext className="-right-1" />
        </Carousel>
    )
}