type SelectionProps = {
    defaultVal: boolean;
    firstValue: string;
    secondValue: string;
    firstColors: string;
    secondColors: string;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Selection({defaultVal, setValue, ...props}: SelectionProps) {

    return (
        <div className="right-8 flex flex-row justify-center text-white items-center ml-[2%] inputBgLightGrey rounded-lg px-2 py-1">
            {defaultVal ? (
                <a className={`${props.firstColors} select-none cursor-pointer transition-colors ease-in-out duration-200`} onClick={() => setValue(true)}> {props.firstValue} </a>
            ) : (
                <a className={`${props.secondColors} select-none cursor-pointer transition-colors ease-in-out duration-200`} onClick={() => setValue(true)}> {props.firstValue} </a>
            )}

            <span className="mx-2 font-extrabold select-none">/</span>

            {!defaultVal ? (
                <a className={`${props.firstColors} select-none cursor-pointer transition-colors ease-in-out duration-200`} onClick={() => setValue(false)}> {props.secondValue} </a>
            ) : (
                <a className={`${props.secondColors} select-none cursor-pointer transition-colors ease-in-out duration-200`} onClick={() => setValue(false)}> {props.secondValue} </a>
            )}
        </div>
    );
}