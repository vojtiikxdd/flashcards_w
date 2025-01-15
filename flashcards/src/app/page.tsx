"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#120e1b]">
      <div className="flex flex-col">
        <Link href="/abc">abc</Link>
      </div>
    </main>
  );
}
