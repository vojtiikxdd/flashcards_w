"use client";

import React, { useState } from "react";
import { Input } from "@/components/input";
import { login, signup } from "@/utils/supabase/actions";

export default function Login() {
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [register, setRegister] = useState(false);
    const [email, setEmail] = useState('');
    const [error, setError] = useState<string | undefined>('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (register) {
            const res = await signup({ email, password, nickname });
            setError(res);
        } else {
            const res = await login({ email, password });
            setError(res);
        }
    }

    return (
        <main className="absolute top-[45%] left-1/2 -translate-y-1/2 -translate-x-1/2 m-auto border-2 border-[#141414] border-dashed rounded-3xl w-[45rem] h-[25rem] bg-[#1f1f1f3d]">
            <div className="flex flex-row justify-center items-center mt-[2%]">
                <h1 className="text-4xl text-[#f1f1f1] text-center font-bold">
                    {register ? "Register!" : "Login!"}
                </h1>
                <div className="absolute right-8 flex flex-row justify-center items-center ml-[2%] ">
                    {error}
                    {register ? (
                        <a className="text-[#c995ee] hover:text-[#b670e8] focus:text-[#b670e8] active:text-[#552b66] select-none cursor-pointer transition-colors ease-in-out duration-200" onClick={() => setRegister(true)}>register</a>
                    ) : (
                        <a className="hover:text-[#b670e8] focus:text-[#b670e8] active:text-[#552b66] select-none cursor-pointer transition-colors ease-in-out duration-200" onClick={() => setRegister(true)}> register </a>
                    )}

                    <span className="mx-2 font-extrabold">/</span>

                    {!register ? (
                        <a className="text-[#c995ee] hover:text-[#b670e8] focus:text-[#b670e8] active:text-[#552b66] select-none cursor-pointer transition-colors ease-in-out duration-200" onClick={() => setRegister(false)}>login</a>
                    ) : (
                        <a className="hover:text-[#b670e8] focus:text-[#b670e8] active:text-[#552b66] select-none cursor-pointer transition-colors ease-in-out duration-200" onClick={() => setRegister(false)}>login</a>
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
                    <Input type="password" label="confirm" name="confirmPassword" id="confirmPswdInput" />
                )}

                <div className="mx-auto flex flex-row cursor-pointer relative items-center justify-between labelMovement">
                    <button
                        id="submitButton" type="submit"
                        className="self-center select-none w-96 h-10 text-xl font-semibold text-white border-2 border-solid border-[#7246d8] rounded-xl mt-[3%] bg-[#8257e7] hover:bg-violet-500 focus:bg-violet-600 ease-in-out duration-200">
                        Send
                    </button>
                </div>
            </form>
        </main>
    );
}