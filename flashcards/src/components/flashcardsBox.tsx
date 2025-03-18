"use client";

import { getFlashcardOfUser } from "@/utils/supabase/actions";
import Link from "next/link";
import { useEffect, useState } from "react";

export function FlashcardsBox({ name, id }: { name: string; id: string; }) {
    return (
        <Link href={`/cards/${id}`} className="flex w-[220px] h-[160px] bg-[#16111f] rounded-3xl border-2 border-solid border-[#686868] p-4 text-3xl font-bold text-[#fff] hover:border-[#969696] transition-colors ease-in-out duration-300 drop-shadow-sm hover:drop-shadow-white cursor-pointer">
            {name}
        </Link>
    )
}

export function FlashcardBoxHolder() {
    const [fcs, setFcs] = useState<{ f_name: string; id: string; }[] | undefined>([]);

    useEffect(() => {
        (async () => {
            const res = await getFlashcardOfUser();
            setFcs(res);
        })();
    }, []);

    return (
        <div className="flex flex-row flex-wrap ml-4">
            {fcs?.map((fc, index) => (
                <FlashcardsBox key={index} name={fc.f_name} id={fc.id} />
            ))}
        </div>
    )
}