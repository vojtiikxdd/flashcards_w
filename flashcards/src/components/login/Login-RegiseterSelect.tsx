type SelectionProps = {
    register: boolean;
    setRegister: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Selection({register, setRegister}: SelectionProps) {

    return (
        <div className="absolute right-8 flex flex-row justify-center text-white items-center ml-[2%] ">
            {register ? (
                <a className="text-[#c995ee] hover:text-[#b670e8] focus:text-[#b670e8] active:text-[#552b66] select-none cursor-pointer transition-colors ease-in-out duration-200" onClick={() => setRegister(true)}>register</a>
            ) : (
                <a className="hover:text-[#b670e8] focus:text-[#b670e8] active:text-[#552b66] select-none cursor-pointer transition-colors ease-in-out duration-200" onClick={() => setRegister(true)}> register </a>
            )}

            <span className="mx-2 font-extrabold select-none">/</span>

            {!register ? (
                <a className="text-[#c995ee] hover:text-[#b670e8] focus:text-[#b670e8] active:text-[#552b66] select-none cursor-pointer transition-colors ease-in-out duration-200" onClick={() => setRegister(false)}>login</a>
            ) : (
                <a className="hover:text-[#b670e8] focus:text-[#b670e8] active:text-[#552b66] select-none cursor-pointer transition-colors ease-in-out duration-200" onClick={() => setRegister(false)}>login</a>
            )}
        </div>
    );
}