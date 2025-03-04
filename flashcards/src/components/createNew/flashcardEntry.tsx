import { DivideIcon, Plus } from "lucide-react";
import { FlashcardItem } from "./flashcardItem";
import { useState } from "react";

let id = 4;


type Props = {
    bgColor: string;
    txtareaBgCol: string;
}

function IndexIdCreator() {
    id++;
    return id;
}

function addItem(props: Props) {
    console.log(IndexIdCreator());
    return (
        <div className={`${props.bgColor} p-4 rounded-lg mt-4`}>
            <FlashcardItem entryIndex={IndexIdCreator()} txtareaBgCol="txtareaBgLightGrey" />
        </div>
    );
}

export default function FlashcardEntry({ ...props }: Props) {
    const [addCounter, setAddCounter] = useState(1);

    function buttonCounter(e: React.MouseEvent<HTMLButtonElement>) {
        if (e.currentTarget.textContent === "+") {
            if (addCounter < 20) setAddCounter(addCounter + 1);
        } else if (e.currentTarget.textContent === "-") {
            if (addCounter > 1) setAddCounter(addCounter - 1);
        }
    }

    return (
        <div>
            <div className={`${props.bgColor} p-4 rounded-lg mt-4`}>
                <FlashcardItem entryIndex={1} txtareaBgCol="txtareaBgLightGrey" />
            </div>
            <div className={`${props.bgColor} p-4 rounded-lg mt-4`}>
                <FlashcardItem entryIndex={2} txtareaBgCol="txtareaBgLightGrey" />
            </div>
            <div className={`${props.bgColor} p-4 rounded-lg mt-4`}>
                <FlashcardItem entryIndex={3} txtareaBgCol="txtareaBgLightGrey" />
            </div>
            <div className={`${props.bgColor} p-4 rounded-lg mt-4`}>
                <FlashcardItem entryIndex={4} txtareaBgCol="txtareaBgLightGrey" />
            </div>
            <div className="flex flex-row justify-center mt-4">
                <div className="py-2 px-8 rounded-full bg-[#3e3e3e] flex flex-row items-center gap-2">
                    <button
                        onClick={() => addItem(props)} type="button"
                        className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg"
                    >
                        <Plus size={30} />
                    </button>
                    <div className="flex flex-row items-center gap-2">
                        <p className="font-bold text-xl">Add cards</p>
                        <div className="flex flex-row items-center rounded-full bg-white gap-2">
                            <input type="number"
                                placeholder="1"
                                value={addCounter}
                                min={1}
                                max={20}
                                readOnly
                                className="h-10 bg-transparent border-none text-base text-black w-16 active:outline-none focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                            />
                            <div className="flex flex-col">
                                <button type="button"
                                    className="flex h-4 items-center text-black"
                                    onClick={buttonCounter}
                                >
                                    +
                                </button>
                                <button type="button"
                                    className="flex h-4 items-center text-black"
                                    onClick={buttonCounter}
                                >
                                    -
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}