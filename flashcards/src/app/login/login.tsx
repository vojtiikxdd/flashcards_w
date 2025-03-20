"use client";

import React, { useState } from "react";
import { Input } from "@/components/login/inputLogin";
import { login, signup } from "@/utils/supabase/actions";
import Selection from "@/components/login/selection";

import { ErrorMessage } from "@/components/login/errorMessage";

export default function Login() {
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [register, setRegister] = useState(false);
    const [email, setEmail] = useState('');
    const [error, setError] = useState<string | undefined>('');
    const [showingFullError, setShowingFullError] = useState(false);    // State for expanded error

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (register) {
            const res = await signup({ email, password, nickname });
            setError(res);
        } else {
            const res = await login({ email, password });
            setError(res);
        }
    };

    return (
        <main className={`
            absolute top-[48%] left-1/2 -translate-y-1/2 -translate-x-1/2 m-auto 
            border-2 border-[#252525d8] border-dashed rounded-3xl w-[45rem] wrapBoxBgColor ease-in-out duration-200 
            ${register ?
                (error ? (showingFullError ? "h-[29rem]" : "h-[27rem]") : "h-[25rem]")
                :
                (showingFullError ? "h-[25rem]" : "h-[22rem]")
            }
        `}>
            <div className="flex flex-row justify-center items-center mt-[2%]">
                <h1 className="text-4xl text-[#f1f1f1] text-center font-bold">
                    {register ? "Register!" : "Login!"}
                </h1>
                <div className="absolute right-4">
                    <Selection
                        defaultVal={register}
                        firstValue="register"
                        secondValue="login"
                        setValue={setRegister}
                        firstColors="selection1Violet"
                        secondColors="selection2Violet"
                    />
                </div>
            </div>

            {error && (
                <ErrorMessage
                    error={error}
                    showingFullError={showingFullError}
                    setShowingFullError={setShowingFullError}
                    maxTextLength={25}
                />
            )}

            <form onSubmit={handleSubmit}
                className={`flex flex-col ${!register && (error ? "mt-1" : "mt-6")}`}>
                {register && (
                    <Input type="text" label="nickname" name="nickname" id="nickInput"
                        onValueChange={setNickname}
                    />
                )}

                <Input type="email" label="email" name="email" id="emailInput"
                    onValueChange={setEmail}
                />

                <Input type="password" label="password" name="password" id="pswdInput"
                    onValueChange={setPassword}
                />

                {register && (
                    <Input type="password" label="confirm" name="confirmPassword" id="confirmPswdInput" />
                )}

                <div className="mx-auto flex flex-row cursor-pointer relative items-center justify-between labelMovement">
                    <button id="submitButton" type="submit"
                        className="self-center select-none w-96 h-10 text-xl font-semibold text-white rounded-xl mt-[3%] bg-[#a13fda] hover:bg-[#8934bb] focus:bg-[#9638cc] active:bg-[#910cdd] ease-in-out duration-200"
                    >
                        Send
                    </button>
                </div>
            </form>
        </main>
    );
}
