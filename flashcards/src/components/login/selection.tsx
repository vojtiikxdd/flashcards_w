type SelectionProps = {
    defaultVal: boolean;
    firstValue: string;
    secondValue: string;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Selection({defaultVal, setValue, ...props}: SelectionProps) {

    return (
        <div className="absolute right-8 flex flex-row justify-center text-white items-center ml-[2%] ">
            {defaultVal ? (
                <a className="text-[#c995ee] hover:text-[#b670e8] focus:text-[#b670e8] active:text-[#552b66] select-none cursor-pointer transition-colors ease-in-out duration-200" onClick={() => setValue(true)}> {props.firstValue} </a>
            ) : (
                <a className="hover:text-[#b670e8] focus:text-[#b670e8] active:text-[#552b66] select-none cursor-pointer transition-colors ease-in-out duration-200" onClick={() => setValue(true)}> {props.firstValue} </a>
            )}

            <span className="mx-2 font-extrabold select-none">/</span>

            {!defaultVal ? (
                <a className="text-[#c995ee] hover:text-[#b670e8] focus:text-[#b670e8] active:text-[#552b66] select-none cursor-pointer transition-colors ease-in-out duration-200" onClick={() => setValue(false)}> {props.secondValue} </a>
            ) : (
                <a className="hover:text-[#b670e8] focus:text-[#b670e8] active:text-[#552b66] select-none cursor-pointer transition-colors ease-in-out duration-200" onClick={() => setValue(false)}> {props.secondValue} </a>
            )}
        </div>
    );
}