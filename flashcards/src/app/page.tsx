"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col ">
        <div className="flex absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 m-auto w-[45rem] h-[25rem] bg-[#16161a] rounded-lg shadow-2xl border-2 border-[#0d0d0d] justify-center items-center font-semibold">
          <p><Link href="./profile" className="underline">Log-in</Link> and start learning with FlashCards!</p>
        </div>
    </main>
  );
}
