"use client";

import React, { useState } from "react";
import { Input } from "@/components/input";
import { login, signup } from "@/utils/supabase/actions";
import { CircleX } from "lucide-react";
import Selection from "@/components/Login-RegiseterSelect";

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
        <main className={`absolute top-[45%] left-1/2 -translate-y-1/2 -translate-x-1/2 m-auto border-2 border-[#141414] border-dashed rounded-3xl w-[45rem] h-[25rem] bg-[#1f1f1f3d] ${(register && error) ? "h-[27rem]" : "h-[25rem]"}`}>
            <div className="flex flex-row justify-center items-center mt-[2%]">
                <h1 className="text-4xl text-[#f1f1f1] text-center font-bold">
                    {register ? "Register!" : "Login!"}
                </h1>

                <Selection register={register} setRegister={setRegister} />
            </div>

            {error && (
                <div className="flex mx-auto text-center  px-2 py-3 w-[350px] mt-4 bg-[#aa000058]  text-white border-2 border-solid border-red-600 rounded-lg items-center justify-start h-[3rem]">
                    <CircleX size={30} className="py-1 absolute left-[205px] top-[80px]" color="#fb2626" />
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col ">
                <div className="mt-1">
                    {register && (
                        <Input type="text" label="nickname" name="nickname" id="nickInput" 
                            isSearch={false}
                            onValueChange={setNickname}
                        />
                    )}
                </div>

                <Input type="email" label="email" name="email" id="emailInput"
                    isSearch={false}
                    onValueChange={setEmail}
                />

                <Input type="password" label="password" name="password" id="pswdInput"
                    isSearch={false}
                    onValueChange={setPassword}
                />

                {register && (
                    <Input type="password" label="confirm" name="confirmPassword" id="confirmPswdInput"
                        isSearch={false}
                    />
                )}

                <div className="mx-auto flex flex-row cursor-pointer relative items-center justify-between labelMovement">
                    <button id="submitButton" type="submit"
                        className="self-center select-none w-96 h-10 text-xl font-semibold text-white border-2 border-solid border-[#7246d8] rounded-xl mt-[3%] bg-[#8257e7] hover:bg-violet-500 focus:bg-violet-600 ease-in-out duration-200">
                        Send
                    </button>
                </div>
            </form>
        </main>
    );
}