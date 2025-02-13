"use client"

import { useState } from "react";

type InputProps = {
    label: string;
    onValueChange?: (value: string) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ label, onValueChange, ...props }: InputProps) {
    const [isTopped, setIsTopped] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="relative flex flex-row justify-center items-center">
            <label htmlFor={props.id}
            className={`absolute text-xl font-semibold text-[#cccccc] ease-in-out duration-200 bottom-[265px] left-[178px] bg-[#201c35] cursor-pointer select-none  h-6 flex items-center justify-center rounded-xl ${isTopped ? "top-[2px] text-lg left-[182px] px-2" : "top-[24px]"}`} >{label}</label>
            <input
                onChange={(e) => {
                    if (e.target.value.length > 0) {
                        setIsTopped(true);
                    } else if (e.target.value.length === 0 && isFocused) {
                        setIsTopped(true);
                    } else{
                        setIsTopped(false);
                    }
                    onValueChange?.(e.target.value);
                }}
                onFocus={() => {
                    setIsTopped(true);
                    setIsFocused(true);
                }}
                onBlur={(e) => {
                    setIsFocused(false);
                    if (e.target.value.length === 0) {
                        setIsTopped(false);
                    }
                }}
                id={props.id}
                {...props}
                className="enabled  items-center mx-auto p-2 text-xl text-[#ffffff] font-semibold rounded-xl w-96 h-10 mt-[16px] focus:outline-none outline-[#222222] border-2 border-solid border-[#d7d7d7] focus:border-[#7c46a3] ease-in-out duration-300 bg-transparent selection:bg-[#101010] cursor-pointer focus:cursor-text hover:border-[#a255f0]" />
        </div>
    )
}