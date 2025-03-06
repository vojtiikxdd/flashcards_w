import { useState } from "react";

type Props = {
    txtareaBgCol: string;
    label: string;
    name: string;
    entryIndex: number;
    id: number;
}

export function SingleItem({ ...props }: Props) {
    return (
        <div className="flex flex-col gap-2 w-[100%]">
            <textarea
                id={props.id + props.name}
                name="term"
                placeholder="Enter text here"
                className={`${props.txtareaBgCol} w-[100%] p-2 rounded-md text-white h-[40px] min-h-[40px] max-h-40`}
            />
            <label htmlFor={props.id + props.name}
                className={`text-white text-xl text-center rounded-xl ease-in-out duration-200 cursor-pointer select-none
                ${props.name === "term" ? "w-[62px]" : "w-[134px]"} ${props.txtareaBgCol}`}
            >
                {props.label}
            </label>
        </div>
    )
}