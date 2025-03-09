import { Check, Plus } from "lucide-react";
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
    const [hiddenMode, setHiddenMode] = useState(false);

    function createFlashcard() {
        console.log("Flashcards created!"); // Placeholder for future functionality
    }

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
                // Find the position of entryIndex
                const insertPos = prev.indexOf(entryIndex);
                if (insertPos === -1) return prev; // Safety check: entryIndex not found

                // Generate new cards that should be inserted
                const newCards = Array.from({ length: addCounter }, (_, i) => entryIndex + i + 1);

                // Shift numbers greater than entryIndex up by addCounter
                const updatedFlashcards = prev.map((num) =>
                    num > entryIndex ? num + addCounter : num
                );

                // Insert the new cards directly **after** the clicked card
                return [
                    ...updatedFlashcards.slice(0, insertPos + 1), // Keep cards before entryIndex
                    ...newCards, // Insert new cards
                    ...updatedFlashcards.slice(insertPos + 1), // Keep the rest, but shifted
                ];
            }
        });

        setAddCounter(1);
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
                <div className="flex flex-col gap-2">
                    <div key={entryIndex} className={`${props.bgColor} p-4 rounded-lg mt-4`}>
                        <FlashcardItem onDelete={() => deleteItem(entryIndex)} entryIndex={entryIndex} txtareaBgCol={props.txtareaBgCol} />
                    </div>
                    {/*flashcards.findLastIndex((index) => index === entryIndex) !== flashcards.length - 1 && (
                        <div className="justify-center flex flex-row gap-2 h-2 w-full"
                            onMouseEnter={(e) => {
                                setHiddenMode(true);
                            }}
                            onMouseLeave={(e) => {
                                setHiddenMode(false);
                            }}
                        >
                            <a className={`hover:flex flex-row items-center gap-2 rounded-full bg-blue-500 cursor-pointer ${hiddenMode ? "flex w-2 h-2" : "hidden w-0 h-0"}`}

                                onClick={(e) => {
                                    addItem(entryIndex);
                                    e.stopPropagation();
                                }}
                            >
                                <Plus
                                    fill="white"
                                    color="white"
                                    size={20}
                                />
                            </a>
                        </div>
                    )*/}
                </div>
            ))}

            <div className="flex flex-row justify-center mt-4">
                <NewCardCounter addCounter={addCounter} setAddCounter={setAddCounter} buttonCounter={buttonCounter} addItem={addItem} />
            </div>

            <div className="flex flex-row justify-end mt-4 h-[41px]">
                <button
                    type="button"
                    onClick={() => createFlashcard()}
                    className="flex flex-row buttonGreen p-2 rounded-full text-white ease-in-out duration-200 gap-2 absolute shadow-[0px_1px_6px_rgba(25,25,25,1)] "
                >
                    Create
                    <Check size={25} color="#fff" className="rounded-full bg-[#21eb53] p-[2px]" />
                </button>
            </div>
        </div>
    );
}