import { Plus } from 'lucide-react';

type Props = {
    addCounter: number;
    setAddCounter: (value: number) => void;
    buttonCounter: (e: React.MouseEvent<HTMLButtonElement>) => void;
    addItem: () => void;
}

export function NewCardCounter({ ...props }: Props) {
    return (
        <div className="py-2 px-2 rounded-full bg-[#3e3e3e] flex flex-row items-center gap-5">
            <button
                onClick={() => props.addItem()} type="button"
                className="w-12 h-12 bg-blue-700 hover:bg-blue-800 ease-in-out duration-200 text-white rounded-full flex items-center justify-center shadow-lg"
            >
                <Plus size={30} />
            </button>
            <div className="flex flex-row items-center gap-5">
                <p className="font-bold text-xl">Add cards</p>
                <div className="flex flex-row items-center rounded-full bg-white gap-2">
                    <input type="number"
                        placeholder="1"
                        value={props.addCounter}
                        min={1}
                        max={20}
                        readOnly
                        className="h-10 pl-3 bg-transparent border-none text-base text-black w-8 active:outline-none focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                    />
                    <div className="flex flex-col pr-2">
                        <button type="button"
                            id='plus'
                            className="flex h-4 items-center justify-center text-black text-xl hover:bg-[#bbb] rounded-sm ease-in-out duration-200"
                            onClick={props.buttonCounter}
                        >
                            +
                        </button>
                        <button type="button"
                            id='minus'
                            className="flex flex-col h-4 items-center align-middle justify-center text-black text-xl hover:bg-[#bbb] rounded-sm ease-in-out duration-200"
                            onClick={props.buttonCounter}
                        >
                            -
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}