import { CircleX, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils"

export function ErrorMessage({
    maxTextLength,
    width,
    error,
    showingFullError,
    setShowingFullError
}: {
    maxTextLength: number;
    width?: string;
    error: string | undefined;
    showingFullError: boolean;
    setShowingFullError: (value: boolean) => void;
}) {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        if (error) {
            setShowButton(error.length > (maxTextLength)); // Show button only if text is long
        }
    }, [error]);

    function truncateText(text: string, maxLength: number): string {
        return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
    }

    return (
        <div
            className={cn(`relative flex mx-auto text-center px-2 w-[350px] mt-4 bg-[#aa000058]  
            text-white border-2 border-solid border-red-600 rounded-lg justify-center ease-in-out duration-200`,
            showingFullError ? "h-[5rem] items-end py-2" : "h-[3rem] items-center py-3",
            width
        )}
        >
            <CircleX
                size={30}
                className={`py-1 absolute ease-in-out duration-200 top-2 ${showingFullError ? "left-[44px]" : "left-3"}`} 
                color="#fb2626"
            />

            {showButton && (
                <button
                    className={`absolute bg-[#a01212] hover:bg-[#ca1b1b] top-3 h-[20px] w-[20px] rounded-lg text-white ease-in-out duration-200 ${showingFullError ? "right-12" : "right-4"}`}
                    onClick={() => setShowingFullError(!showingFullError)}
                >
                    <ChevronDown
                        size={20} color="white"
                        className={`${showingFullError ? "rotate-90" : "rotate-0"} ease-in-out duration-150`}
                    />
                </button>
            )}

            <p className={`absolute truncate ease-in-out duration-200 
                ${showingFullError ? (width ? "w-[710px]" : "w-340px") : (width ? "w-[540px]" : "w-[240px]")}
                ${!showingFullError && "my-auto"}`
            }>
                {showingFullError ? error : truncateText(error as string, maxTextLength)}
            </p>
        </div>
    );
}
