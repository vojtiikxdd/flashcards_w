"use client";

import React, { useState } from "react";
import { supabase } from "../supabase";
import bcrypt from "bcryptjs";
import { Input } from "@/components/input";

//funkce pro pohybu labelu nad inputem
const useFloatingLabel = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);
  const [isTopped, setIsTopped] = useState(value !== ""); // Ensure correct label position on load

  const handleFocus = () => setIsTopped(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setIsTopped(e.target.value !== ""); // Keeps label on top if there's text
  };

  const handleBlur = () => {
    setIsTopped(value !== ""); // Moves label back down if empty
  };

  return { value, isTopped, handleFocus, handleChange, handleBlur };
};

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

  const [register, setRegister] = useState(false);

  // Vytvoření proměnných pro jednotlivé labely
  // bylo nutno použít jiné názvy, protože jsou tyto  názvy již použity pro zápis do databáze
  const nickVal = useFloatingLabel();
  const emailVal = useFloatingLabel();
  const pswdVal = useFloatingLabel();
  const confirmPswdVal = useFloatingLabel();

  return (
    <main className="absolute top-[45%] left-1/2 -translate-y-1/2 -translate-x-1/2 m-auto border-2 border-[#141414] border-dashed rounded-3xl w-[45rem] h-[25rem] bg-[#1f1f1f3d]">
      <div className="flex flex-row justify-center items-center mt-[2%]">
        <h1 className="text-4xl text-[#f1f1f1] text-center font-bold">
          {register ? "Register!" : "Login!"}
        </h1>
        <div className="absolute right-8 flex flex-row justify-center items-center ml-[2%] ">
          {register ? (
            <a className="text-[#c995ee] hover:text-[#b670e8] focus:text-[#b670e8] active:text-[#552b66] select-none cursor-pointer transition-colors ease-in-out duration-200"
              onClick={() => setRegister(true)}>register</a>
          ) : (
            <a className="hover:text-[#b670e8] focus:text-[#b670e8] active:text-[#552b66] select-none cursor-pointer transition-colors ease-in-out duration-200"
              onClick={() => setRegister(true)}> register </a>)}

          <span className="mx-2 font-extrabold">/</span>

          {!register ? (
            <a className="text-[#c995ee] hover:text-[#b670e8] focus:text-[#b670e8] active:text-[#552b66] select-none cursor-pointer transition-colors ease-in-out duration-200"
              onClick={() => setRegister(false)}>login</a>
          ) : (
            <a className="hover:text-[#b670e8] focus:text-[#b670e8] active:text-[#552b66] select-none cursor-pointer transition-colors ease-in-out duration-200"
              onClick={() => setRegister(false)}>login</a>
          )}
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col ">
        <div className="mt-1">
          {register && (
            <Input label="nickname" onValueChange={setNickname} name="nickname" id="nickInput" />
          )}
        </div>
        <Input type="email" label="email" onValueChange={setEmail} name="email" id="emailInput" />
        <Input type="password" label="password" onValueChange={setPassword} name="password" id="pswdInput" />
        {register && (
          <Input type="password" label="confirm" name="confirmPassword" id="comfirmPswdInput" />
        )}

        <div className="mx-auto flex flex-row cursor-pointer relative items-center justify-between labelMovement">
          <button
            id="submitButton" type="submit"
            onClick={() => success && window.location.href == "/"}
            className="self-center w-96 h-10 text-xl font-semibold text-white border-2 border-solid border-[#7246d8] rounded-xl mt-[3%] bg-[#8257e7] hover:bg-violet-500 focus:bg-violet-600 ease-in-out duration-200">
            Send
          </button>
        </div>
      </form>
    </main>
  );
}