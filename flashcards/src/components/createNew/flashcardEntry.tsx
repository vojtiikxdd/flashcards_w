import { Plus } from "lucide-react";
import { FlashcardItem } from "./flashcardItem";
import { useState } from "react";
import { NewCardCounter } from "./newCard&Counter";

type Props = {
    bgColor: string;
    txtareaBgCol: string;
}

export default function FlashcardEntry({ ...props }: Props) {
    const [addCounter, setAddCounter] = useState(1);
    const [flashcards, setFlashcards] = useState<number[]>([1, 2, 3, 4]);

    function buttonCounter(e: React.MouseEvent<HTMLButtonElement>) {
        if (e.currentTarget.textContent === "+") {
            if (addCounter < 20) setAddCounter((prev) => prev + 1);
        } else if (e.currentTarget.textContent === "-") {
            if (addCounter > 1) setAddCounter((prev) => prev - 1);
        }
    }

    function addItem() {
        setFlashcards((prev) => {
            const lastIndex = prev.length > 0 ? Math.max(...prev) : 0;
            const newCards = Array.from({ length: addCounter }, (_, i) => lastIndex + i + 1);
            return [...prev, ...newCards];
        });
        setAddCounter(1);
    }

    function deleteItem(entryIndex: number) {
        if(entryIndex > 4)
            setFlashcards((prev) => prev.filter((index) => index !== entryIndex));
        else
            alert("You can't delete the first 4 flashcards!"); // This is a temporary solution
    }    

    return (
        <div>
            {flashcards.map((entryIndex) => (
                <div className="flex flex-col">
                    <div key={entryIndex} className={`${props.bgColor} p-4 rounded-lg mt-4`}>
                        <FlashcardItem onDelete={() => deleteItem(entryIndex)} entryIndex={entryIndex} txtareaBgCol={props.txtareaBgCol} />
                    </div>
                    {flashcards.findLastIndex((index) => index === entryIndex) !== flashcards.length - 1 && (
                        <div className="justify-center flex flex-row gap-2 mt-4 w-full">
                            <div className="flex flex-row items-center gap-2 rounded-full">
                                <Plus fill="white" color="white" size={20} />
                            </div>
                        </div>
                    )}
                </div>
            ))}

            <div className="flex flex-row justify-center mt-4">
                <NewCardCounter addCounter={addCounter} setAddCounter={setAddCounter} buttonCounter={buttonCounter} addItem={addItem} />
            </div>
        </div>
    );
}