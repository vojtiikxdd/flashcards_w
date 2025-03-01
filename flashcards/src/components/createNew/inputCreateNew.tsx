"use client"

import { useState } from "react";

type InputProps = {
    label: string;
    bgcolor: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ label, ...props }: InputProps) {
    const [isTopped, setIsTopped] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    return (
        <div className="relative flex flex-row justify-center items-center py-3 px-2">
            <label htmlFor={props.id}
                className={`${props.bgcolor} flex absolute text-xl font-semibold ease-in-out duration-200 cursor-pointer select-none h-6 items-center justify-center rounded-xl 
                ${isTopped ? "top-[0px] text-base left-[28px] px-2" : "top-[20px] left-[22px]"} 
                ${(isFilled && isTopped) ? "text-[#cccccc]" : "text-white"}
                ${!isFocused && "text-[#cccccc]"}`}
            >
                {label}
            </label>
            <input
                onChange={(e) => {
                    {(e.target.value.length > 0 || (e.target.value.length === 0 && isFocused)) ? setIsTopped(true) : setIsTopped(false)}
                    setIsFilled(e.target.value.length > 0);
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
                className={`enabled items-center p-2 text-xl mr-auto text-[#ffffff] font-semibold rounded-xl w-[100%] h-10 focus:outline-none outline-[#232323] border-2 border-solid border-[#ababab] focus:border-[#ffffff] ease-in-out duration-300 bg-transparent selection:bg-[#101010] cursor-pointer focus:cursor-text hover:border-[#d5d5d5]`}
            /> 
        </div>
    )
}