import React from "react";

{/*leaving it for future */}

type Props = {
    text: string;
    onClick: () => void;
    bgColor: string;
    textColor: string;
    hoverColor: string;
    hoverTextColor: string;
};

export function GlobalButton({ icon, } : {icon: React.ReactNode}) {
    return (
        <button
            onClick={onClick}
            className={`buttonBlue p-2 mb-8 rounded-full text-white ease-in-out duration-200 gap-2 absolute shadow-[0px_1px_6px_rgba(25,25,25,1)] ${className}`}
            style={{
                backgroundColor: bgColor,
                color: textColor,
            }}
        >
            {text}
        </button>
    );
}