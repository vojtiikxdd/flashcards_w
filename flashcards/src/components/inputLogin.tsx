"use client"

import { useState } from "react";
import { Eye, Target } from "lucide-react";
import { EyeOff } from "lucide-react";
import { Info } from "lucide-react";
import { Check } from "lucide-react";
import { Plus } from "lucide-react";

type InputProps = {
    label: string;
    isRegister: boolean;
    onValueChange?: (value: string) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ label, onValueChange, ...props }: InputProps) {
    const [isTopped, setIsTopped] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [isPassword, setIsPassword] = useState(props.type);
    const [isFilled, setIsFilled] = useState(false);

    return (
        <div className="relative flex flex-row justify-center items-center">
            {/* this is base to replace the search input*/}
            {props.name === "password" && (
                <div className="absolute z-50 left-[135px] top-[24px] cursor-pointer infoBox">
                    <Info color="white"/>
                </div>
            )}
            
            <label htmlFor={props.id}
            className={`absolute text-xl font-semibold text-[#cccccc] ease-in-out duration-200 bottom-[265px] left-[178px] bg-[#171717] cursor-pointer select-none  h-6 flex items-center justify-center rounded-xl ${isTopped ? "top-[2px] text-base left-[176px] px-2" : "top-[24px]"}`}>
                {label}
            </label>
            <input
                onChange={(e) => {
                    {(e.target.value.length > 0 || (e.target.value.length === 0 && isFocused)) ? setIsTopped(true) : setIsTopped(false)}
                    onValueChange?.(e.target.value);
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
                type={isPassword}               
                className={`enabled items-center mx-auto p-2 text-xl text-[#ffffff] font-semibold rounded-xl w-96 h-10 mt-[16px] focus:outline-none outline-[#222222] border-2 border-solid border-[#d7d7d7] focus:border-[#7c46a3] ease-in-out duration-300 bg-transparent selection:bg-[#101010] cursor-pointer focus:cursor-text hover:border-[#a255f0] ${(!isFocused && isTopped) && "border-[#d49bfc]"}`} 
            /> 

            {(props.name === "password" || props.name === "confirmPassword") && (isPassword === "password" || isPassword === "text") && (
                <a className="absolute right-[180px] top-[24px] cursor-pointer"
                    onClick={() => {
                        if (isPassword === "password") {
                            setIsPassword("text");
                            props.type = "text";
                        } else {
                            setIsPassword("password");
                            props.type = "password";
                        }
                    }}>
                    {isPassword === "password" ? <Eye color="white" /> : <EyeOff color="white" />} 
                </a>
            )}
            {/* need to set position for the eye(190) and info (125px) icon 
            (props.isRegister && !isTopped && isFilled) ? 
                <Check color="#2eff62" />
                :
                <Plus color="#ff2929" className="rotate-[45deg]" />
            */}
        </div>
    )
}