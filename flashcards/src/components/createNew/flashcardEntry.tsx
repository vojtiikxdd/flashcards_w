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

    function addItem(entryIndex?: number) {
        setFlashcards((prev) => {
            if (entryIndex === undefined) {
                // Default behavior: Add at the end
                const lastIndex = prev.length > 0 ? Math.max(...prev) : 0;
                const newCards = Array.from({ length: addCounter }, (_, i) => lastIndex + i + 1);
                return [...prev, ...newCards];
            } else {
                // Find the position in the array where entryIndex is located
                const insertPos = prev.indexOf(entryIndex);
                if (insertPos === -1) return prev; // Safety check: entryIndex not found

                // Generate new cards starting from the next available number
                const newCards = Array.from({ length: addCounter }, (_, i) => entryIndex + i + 1);

                // Shift numbers greater than entryIndex up by addCounter
                const updatedFlashcards = prev.map((num) =>
                    num > entryIndex ? num + addCounter : num
                );

                // Insert new cards at the correct position
                return [
                    ...updatedFlashcards.slice(0, insertPos + 1),
                    ...newCards,
                    ...updatedFlashcards.slice(insertPos + 1),
                ];
            }
        });
    }

    function deleteItem(entryIndex: number) {
        if (flashcards.length > 4) {
            setFlashcards((prev) =>
                prev
                    .filter((num) => num !== entryIndex) // Remove the selected number
                    .map((num) => (num > entryIndex ? num - 1 : num)) // Shift higher numbers down
            );
        } else {
            alert("You can't delete the first 4 flashcards!");
        }
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
                            <a className="flex flex-row items-center gap-2 rounded-full"
                                onClick={() => addItem(entryIndex)}
                            >
                                <Plus fill="white" color="white" size={20} />
                            </a>
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