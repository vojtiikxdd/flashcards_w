"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <div className="flex absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 m-auto justify-center items-center">
        <p className="text-[#fff] text-5xl font-semibold relative">
          <Link href="/profile" className="bg-clip-text from-[#2592da] to-[#da25d4] bg-gradient-to-r text-transparent hover:font-extrabold duration-75 transition-all ease-in-out">
            Log-in
          </Link> and start learning with FlashCards!

        </p>
      </div>
    </main>
  );
}
