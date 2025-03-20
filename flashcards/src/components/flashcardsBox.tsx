"use client";

import { getFlashcardOfUser } from "@/utils/supabase/actions";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { setLastOpened } from "@/utils/supabase/actions";

export function FlashcardBox() {
    const [fcs, setFcs] = useState<{ f_name: string; id: string; }[] | undefined>([]);

    useEffect(() => {
        (async () => {
            const res = await getFlashcardOfUser();
            setFcs(res);
        })();
    }, []);

    return (
        <Carousel>
            <CarouselContent>
                {fcs?.map((fc, index) => (
                    <CarouselItem key={index}>
                        <Link href={`/cards/${fc.id}`} onClick={() => setLastOpened(fc.id)} className="flex w-[220px] h-[160px] bg-[#16111f] rounded-3xl border-2 border-solid border-[#686868] p-4 text-3xl font-bold text-[#fff] hover:border-[#969696] transition-colors ease-in-out duration-300 drop-shadow-sm hover:drop-shadow-white cursor-pointer">
                            {fc.f_name}
                        </Link>
                    </CarouselItem>
                ))}
            </CarouselContent>

            <CarouselPrevious className="-left-4" />
            <CarouselNext />
        </Carousel>
    )
}