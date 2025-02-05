"use client";

import Link from "next/link";

export default function Home() {

  const session = true;
  const Name = "Adolf";
  const FirstLetter = Name.charAt(0);

  if(session) {
    return (
      <main>
        <div className="flex absolute top-1/3 left-1/2 -translate-y-1/2 -translate-x-1/2 m-auto justify-center items-center">
          <p className="text-[#fff] text-4xl font-medium relative">
            Welcome back, <span className="bg-clip-text from-[#5e25da] to-[#da25d4] bg-gradient-to-r text-transparent hover:font-extrabold duration-200 transition-all ease-in-out">{Name}</span>! <br />Wanna study some?
          </p> 
        </div>
      </main>
    );
  } 
  else {
    return (
      <main className="flex flex-1 flex-col">
        <div className="flex absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 m-auto justify-center items-center">
          <p className="text-[#fff] text-5xl font-medium relative">
            <Link href="/profile" className="bg-clip-text from-[#2592da] to-[#da25d4] bg-gradient-to-r text-transparent hover:font-extrabold duration-200 transition-all ease-in-out">
              Log-in
            </Link> and start learning with FlashCards!
          </p>    
        </div>
      </main>
    );
  }
}
