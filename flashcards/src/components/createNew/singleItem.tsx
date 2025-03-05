import { useState } from "react";

type Props = {
    txtareaBgCol: string;
    label: string;
    name: string;
    entryIndex: number;
}

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


export function SingleItem({ ...props }: Props) {
    const [isTopped, setIsTopped] = useState(false);
    const [isFocused, setIsFocused] = useState(false);


    let id = IdCreator(props);

    return (
        <div className="flex flex-col gap-2 w-auto">
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
            <label htmlFor={id}
                className={`text-white text-xl rounded-xl ease-in-out duration-200 cursor-pointer select-none w-auto ${props.txtareaBgCol}`}
            >
                {props.label}
            </label>
        </div>
    )
}