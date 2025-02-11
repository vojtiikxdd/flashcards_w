"use client";

import React, { useState } from "react";
import { supabase } from "../supabase";
import bcrypt from "bcryptjs";



export default function Login() {
  const [nickname, setNickname] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  let success = false; // proměnná, která se změní na true, pokud se údaje úspěšně uloží do databáze

  // Typovaní parametru 'e' pro událost formuláře
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const hashedPassword = await bcrypt.hash(password, 10);
    // Voláme API a ukladáme údaje do databáze
    const { data, error } = await supabase
      .from('userCredentials') // Tvoje tabulka v databázi, změň podle názvu
      .insert([
        { nickname, password: hashedPassword, email }
      ])

    if (error) {
      console.log("Chyba pri ukladaní do databázy ", error.message)
      success = false;
    } else {
      console.log("Údaje boli úspešne uložené ", data)
      success = true;
    }
  }

  const [register, setRegister] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <main className="absolute top-[45%] left-1/2 -translate-y-1/2 -translate-x-1/2 m-auto border-2 border-[#141414] border-dashed rounded-3xl w-[45rem] h-[25rem] bg-[#1f1f1f3d]">
      <div className="flex flex-row justify-center items-center mt-[2%]">
        <h1 className="text-4xl text-[#f1f1f1] text-center font-bold">
          {register ? "Register!" : "Login!"}
        </h1>
        <div className="absolute right-8 flex flex-row justify-center items-center ml-[2%] ">
          {register ? (
            <a className="text-[#c995ee] hover:text-[#b670e8] focus:text-[#b670e8] active:text-[#552b66] select-none cursor-pointer transition-colors ease-in-out duration-200" onClick={() => setRegister(true)}>register</a>
          ) : (
            <a className="hover:text-[#b670e8] focus:text-[#b670e8] active:text-[#552b66] select-none cursor-pointer transition-colors ease-in-out duration-200" onClick={() => setRegister(true)}> register </a> )}
          <span className="mx-2 font-extrabold">/</span>
          {!register ? (
            <a className="text-[#c995ee] hover:text-[#b670e8] focus:text-[#b670e8] active:text-[#552b66] select-none cursor-pointer transition-colors ease-in-out duration-200" onClick={() => setRegister(false)}>login</a>
          ) : (
            <a className="hover:text-[#b670e8] focus:text-[#b670e8] active:text-[#552b66] select-none cursor-pointer transition-colors ease-in-out duration-200" onClick={() => setRegister(false)}>login</a>
          )}
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col ">
        {register ? (
          <div className="flex flex-row justify-center items-center">
            <label htmlFor="nicknameInput" className={'absolute text-xl font-semibold text-[#f1f1f1] ease-in-out duration-300 bottom-[265px]' + (isFocused ? 'top-[-1.5rem] text-[#7c46a3]' : 'top-[2.5rem]')}
            >
              Nickname</label>
            <input
              type="text" id="nicknameInput" placeholder="nickname"
              value={nickname}
              onChange={(e) => {
                setNickname(e.target.value);
                setInputValue(e.target.value);
              }}
              onClick={() => setIsFocused(true)}
              onBlur={() => setIsFocused(inputValue !== "")}
              className="items-center labelMovement mx-auto p-2 text-xl font-semibold rounded-xl w-96 h-10 mt-[6%] focus:outline-none outline-[#222222]  border-2 border-solid border-[#d7d7d7] focus:border-[#7c46a3] ease-in-out duration-300 bg-[transparent] selection:bg-[#101010] cursor-pointer focus:cursor-text hover:border-[#a255f0]" />
          </div>
        ) : null}
        <input
          type="email" id="emailInput" placeholder="email"
          value={email} onChange={(e) => setEmail(e.target.value)}
          className="flex flex-row relative items-center justify-between labelMovement mx-auto p-2 text-xl font-semibold rounded-xl w-96 h-10 mt-[2%] focus:outline-none outline-[#222222]  border-2 border-solid border-[#d7d7d7] focus:border-[#7c46a3] ease-in-out duration-300 bg-[transparent] selection:bg-[#101010] cursor-pointer focus:cursor-text hover:border-[#a255f0]" />
        <input
          type="password" id="passwordInput" placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="flex flex-row relative items-center justify-between labelMovement mx-auto p-2 text-xl font-semibold rounded-xl w-96 h-10 mt-[2%] focus:outline-none outline-[#222222]  border-2 border-solid border-[#d7d7d7] focus:border-[#7c46a3] ease-in-out duration-300 bg-[transparent] selection:bg-[#101010] cursor-pointer focus:cursor-text hover:border-[#a255f0]" />
        {register ? (
          <input
            type="password" id="passwordInput" placeholder="password again"
            className="flex flex-row relative items-center justify-between labelMovement mx-auto p-2 text-xl font-semibold rounded-xl w-96 h-10 mt-[2%] focus:outline-none outline-[#222222]  border-2 border-solid border-[#d7d7d7] focus:border-[#7c46a3] ease-in-out duration-300 bg-[transparent] selection:bg-[#101010] cursor-pointer focus:cursor-text hover:border-[#a255f0]" />
        ): null}
        <div className="mx-auto flex flex-row cursor-pointer relative items-center justify-between labelMovement">
          <button
            id="submitButton" type="submit"
            onClick={() => success ? window.location.href = "/" : null}
            className="self-center w-96 h-10 text-xl font-semibold text-white border-2 border-solid border-[#7246d8] rounded-xl mt-[3%] bg-[#8257e7] hover:bg-violet-500 focus:bg-violet-600 ease-in-out duration-200">
            Send
          </button>
        </div>
      </form>
    </main>
  );
}