"use client";

import React, { useState } from "react";
import { supabase } from "../supabase";
import bcrypt from "bcryptjs";
import Link from "next/link";

export default function Login() {
  const [nickname, setNickname] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  // Typovanie parametra 'e' pre udalosť formulára
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const hashedPassword = await bcrypt.hash(password, 10);
    // Voláme API a ukladáme údaje do databázy
    const { data, error } = await supabase
      .from('userCredentials') // Tvoja tabuľka v databáze, zmeň podľa názvu
      .insert([
        { nickname, password:hashedPassword, email }
      ])

    if (error) {
      console.log("Chyba pri ukladaní do databázy ", error.message)
    } else {
      console.log("Údaje boli úspešne uložené ", data)
    }
  } 

  return (
    <main>
      <form onSubmit={handleSubmit} className="flex flex-col absolute top-[45%] left-1/2 -translate-y-1/2 -translate-x-1/2 m-auto border-2 border-[#141414] border-dashed rounded-3xl w-[45rem] h-[25rem] bg-[#1f1f1f3d] ">
        <div className="flex flex-row justify-center items-center mt-[2%] relative">
          <h1 className="text-4xl text-[#f1f1f1] text-center font-bold">
            Log-in!
          </h1>
        </div>
        <div className="flex flex-row cursor-pointer relative items-center justify-between labelMovement">
          <input 
            type="text" 
            id="nicknameInput"
            placeholder="nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)} 
            className="mx-auto p-2 text-xl font-semibold rounded-xl w-96 h-10 mt-[6%] focus:outline-none outline-[#222222]  border-2 border-solid border-[#d7d7d7] focus:border-[#7c46a3] ease-in-out duration-300 bg-[transparent] selection:bg-[#101010] cursor-pointer focus:cursor-text hover:border-[#a255f0]" />
        </div>
        <div className="flex flex-row cursor-pointer relative items-center justify-between labelMovement">
          <input 
            type="password"
            id="passwordInput"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            className="mx-auto p-2 text-xl font-semibold rounded-xl w-96 h-10 mt-[2%] focus:outline-none outline-[#222222]  border-2 border-solid border-[#d7d7d7] focus:border-[#7c46a3] ease-in-out duration-300 bg-[transparent] selection:bg-[#101010] cursor-pointer focus:cursor-text hover:border-[#a255f0]" />
        </div>
        <div className="flex flex-row cursor-pointer relative items-center justify-between labelMovement">
          <input 
            type="password" 
            id="passwordInput" 
            placeholder="password again" 
            className="mx-auto p-2 text-xl font-semibold rounded-xl w-96 h-10 mt-[2%] focus:outline-none outline-[#222222]  border-2 border-solid border-[#d7d7d7] focus:border-[#7c46a3] ease-in-out duration-300 bg-[transparent] selection:bg-[#101010] cursor-pointer focus:cursor-text hover:border-[#a255f0]" />
        </div>
        <div className="flex flex-row cursor-pointer relative items-center justify-between labelMovement">
          <input 
            type="email"
            id="emailInput"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            className="mx-auto p-2 text-xl font-semibold rounded-xl w-96 h-10 mt-[2%] focus:outline-none outline-[#222222]  border-2 border-solid border-[#d7d7d7] focus:border-[#7c46a3] ease-in-out duration-300 bg-[transparent] selection:bg-[#101010] cursor-pointer focus:cursor-text hover:border-[#a255f0]" />
        </div>
        <div className="flex flex-row cursor-pointer relative items-center justify-between labelMovement">
          <a href="/" className="mx-auto">
            <button
              id="submitButton" 
              type="submit"
              className="self-center w-96 h-10 mx-auto text-xl font-semibold text-white border-2 border-solid border-[#7246d8] rounded-xl mt-[3%] bg-[#8257e7] hover:bg-violet-500 focus:bg-violet-600 ">
                Send
            </button>
          </a> 
        </div>
      </form>
    </main>
  )
}
