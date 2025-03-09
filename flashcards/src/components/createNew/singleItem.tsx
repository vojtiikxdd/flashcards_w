import { useState } from "react";

type Props = {
    txtareaBgCol: string;
    label: string;
    name: string;
    entryIndex: number;
}

export function SingleItem({ ...props }: Props) {
    const [isTopped, setIsTopped] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const IdCreator = ({ ...props }: Props) => {
        let id;
    
        if (props.name === "term") {
            id = "term" + props.entryIndex;
        }
        else if (props.name === "definition") {
            id = "definition" + props.entryIndex;
        }
    
        return id;
    }

    let id = IdCreator(props);

    return (
        <div className="relative">
            <label htmlFor={id}
                className={`text-white text-xl absolute rounded-xl ease-in-out duration-200 cursor-pointer select-none
                    ${props.txtareaBgCol} ${isTopped ? "top-[-16px] text-base left-[10px] px-2" : "top-[8px] px-2"} 
                `}
            >
                {props.label}
            </label>
            <textarea
                onChange={(e) => {
                    { (e.target.value.length > 0 || (e.target.value.length === 0 && isFocused)) ? setIsTopped(true) : setIsTopped(false) }
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
                id={id}
                className={`${props.txtareaBgCol} w-full p-2 rounded-md text-white h-[46px] min-h-[40px] max-h-40`}
            />
        </div>
    )
}