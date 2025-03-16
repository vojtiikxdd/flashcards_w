import type { Metadata } from "next";
import { Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { Copyright, User } from "lucide-react";
import { Search } from "lucide-react";

import Link from "next/link";
import Image from "next/image";

const geistMono = Geist_Mono({
    subsets: ["latin"],
    weight: ["900", "800", "700", "600", "500", "400"],
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["800", "700", "600", "500", "400"],
});

export const metadata: Metadata = {
    title: "Flashcards",
    description: "Start learning and get better!",
};

// should be in a separate file
const handleSeach = () => {
    console.log("searching...");
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={`${geistMono.className} min-h-screen flex flex-col antialiased relative h-full w-full bg-[#121212] shadow[0_0px_100px_rgba(255,255,255,0.5)]`}>
                {/*<div className="pointer-events-none absolute inset-0 bg-[#25153d] bg-[size:20px_20px] opacity-50 blur-[100px]"></div>*/}
                <nav className={` ${poppins.className} p-5 flex flex-row justify-between border-b-2 border-dashed border-white bg-gradient-to-b from-[#131313] to-[#181818] font-bold`}>
                    <Link href={"/"} className="flex gap-x-2 cursor-pointer w-fit h-10 text-2xl">
                        <Image src="/newLogo-remade.png" alt="idk" width={70} height={50} />
                        <h1 className="font-[Poppins] text-4xl text-white">FlashCards</h1>
                    </Link>
                    <div className="flex flex-row justify-between w-[60%]">
                        <form className="flex flex-row bg-[#0c0c0c81] rounded-2xl border-solid border-white border-2 items-center max-w-96">
                            <label htmlFor="search">
                                <div className="flex flex-row gap-x-2 cursor-pointer">
                                    <div className="px-2 flex items-center cursor-pointer">
                                        <Search className="border-none border-transparent" color="white" />
                                        <input id="search" type="text" placeholder="Search..." className="focus:border-[#7c46a3] w-full rounded-lg p-[3px] focus:outline-none bg-transparent border-none cursor-pointer focus:cursor-text autofill:bg-[#140f1c] group-autofill:bg-[#140f1c] placeholder: text-[1.1rem] " autoComplete="off" />
                                    </div>
                                </div>
                            </label>
                        </form>
                         <ul className="flex flex-row gap-x-2 justify-center items-center">
                            {/*<li>
                                <Link href="/home" className="font-light italic text-xl hover:font-medium my-auto text-white">
                                    other
                                </Link>
                            </li>
                            <li>
                                <Link href="/home" className="font-light italic text-xl hover:font-medium my-auto text-white">
                                    other
                                </Link>
                            </li>*/}
                            <li>
                                <Link href="/profile" className="cursor-pointer ml-auto flex justify-center items-center">
                                    <User size={40} color="white" />
                                </Link>
                            </li>
                        </ul> 
                    </div>
                </nav>

                <div className="flex-1">
                    {children}
                </div>

        <footer className="bg-gradient-to-t from-[#131313] to-[#181818] justify-center flex flex-row items-center text-xl self-end w-full pb-12 pt-8 border-t-2 border-dashed">
          <p className="text-white">Bylo nás 5ět</p>
          <Copyright className="ml-2" color="white" />
        </footer>
      </body>
    </html>
  );
}

