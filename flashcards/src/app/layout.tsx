import type { Metadata } from "next";
import { Roboto_Mono, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { User } from "lucide-react";
import Link from "next/link";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["700", "400"],
  display: "swap"
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["800", "700", "600", "500", "400"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} min-h-screen flex flex-col antialiased relative h-full w-full bg-gray-900`}>
        <div className="absolute inset-0 bg-cyan-300 bg-[size:20px_20px] opacity-20 blur-[100px]"></div>
        <nav className="p-5 flex flex-row justify-between">
          <Link href={"/"} className="flex">
            <div className="w-10 h-10 text-2xl">x{/*<Image src={""} alt={""} />*/}</div>
            <h1 className="font-[Poppins] text-4xl">FlashCards</h1>
          </Link>
          <Link href="/profile" className="ml-auto flex justify-center items-center">
            <User size={30} />
          </Link>
        </nav>
        <div className="flex-1 flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}

