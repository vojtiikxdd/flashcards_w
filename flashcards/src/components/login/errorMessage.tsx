import { CircleX, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function ErrorMessage({ error }: { error: string | undefined }) {
    const [showingFullError, setShowingFullError] = useState(false);

    function truncateText(text: string, maxLength: number): string {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + "...";
        }
        return text;
    }

    function showFullError() {
        setShowingFullError(!showingFullError);
        console.log("lol");
    }

    return (
        <div className={`flex mx-auto text-center px-2 py-3 w-[350px] mt-4 bg-[#aa000058]  text-white border-2 border-solid border-red-600 rounded-lg items-center justify-start h-[3rem] `}>
            <CircleX size={30} className="py-1 absolute left-[190px] top-[80px]" color="#fb2626" />
            <p className="truncate w-[340px] absolute">
                {truncateText((error as string), 25)}
            </p>
            <button className={`absolute right-[195px] bg-[#a01212] hover:bg-[#ca1b1b]  rounded-lg text-white  ${showingFullError ? "" : ""}`}
                onClick={() => showFullError()}
            >
                <ChevronDown size={20} color='white'
                    className={`${showingFullError ? "rotate-90" : ""}
                    ease-in-out duration-150`} />
            </button>

        </div>
    );
}