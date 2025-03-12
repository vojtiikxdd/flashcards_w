import { CircleX, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export function ErrorMessage({
    error,
    showingFullError,
    setShowingFullError
}: {
    error: string | undefined;
    showingFullError: boolean;
    setShowingFullError: (value: boolean) => void;
}) {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        if (error) {
            setShowButton(error.length > 25); // Show button only if text is long
        }
    }, [error]);

    function truncateText(text: string, maxLength: number): string {
        return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
    }

    return (
        <div
            className={`flex mx-auto text-center px-2 w-[350px] mt-4 bg-[#aa000058]  
            text-white border-2 border-solid border-red-600 rounded-lg justify-center 
            ${showingFullError ? "h-[5rem] items-end py-2" : "h-[3rem] items-center py-3"} ease-in-out duration-200`}
        >
            <CircleX
                size={30}
                className={`py-1 absolute ease-in-out duration-200 
                ${showingFullError ? "left-[215px]" : "left-[190px]"} top-[80px]`}
                color="#fb2626"
            />
            
            {showButton && (
                <button
                    className={`absolute bg-[#a01212] hover:bg-[#ca1b1b] top-[84px] h-[20px] w-[20px] rounded-lg text-white ease-in-out duration-200 
                    ${showingFullError ? "right-[220px]" : "right-[195px]"}`}
                    onClick={() => setShowingFullError(!showingFullError)}
                >
                    <ChevronDown
                        size={20} color="white"
                        className={`${showingFullError ? "rotate-90" : "rotate-0"} ease-in-out duration-150`}
                    />
                </button>
            )}

            <p className={`absolute truncate ease-in-out duration-200 ${showingFullError ? "w-[340px]" : "w-[240px]"}
            ${!showingFullError && "my-auto"}`}>
                {showingFullError ? error : truncateText(error as string, 25)}
            </p>
        </div>
    );
}
