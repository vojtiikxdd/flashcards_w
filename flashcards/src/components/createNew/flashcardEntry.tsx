import { Plus } from "lucide-react";
import { FlashcardItem } from "./flashcardItem";
import { useState } from "react";
import { NewCardCounter } from "./newCard&Counter";

interface FlashcardEntryProps {
    bgColor: string;
    txtareaBgCol: string;
    setQuestionsList: React.Dispatch<React.SetStateAction<string[]>>; // Add the setter for questions list
    setAnswersList: React.Dispatch<React.SetStateAction<string[]>>; // Add the setter for answers list
}

export default function FlashcardEntry({
    bgColor,
    txtareaBgCol,
    setQuestionsList,
    setAnswersList,
}: FlashcardEntryProps) {
    const [addCounter, setAddCounter] = useState(1);
    const [flashcards, setFlashcards] = useState<number[]>([1, 2, 3, 4]);
    const [hiddenMode, setHiddenMode] = useState(false);

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
                const lastIndex = prev.length > 0 ? Math.max(...prev) : 0;
                const newCards = Array.from({ length: addCounter }, (_, i) => lastIndex + i + 1);
                return [...prev, ...newCards];
            } else {
                const insertPos = prev.indexOf(entryIndex);
                if (insertPos === -1) return prev;

                const newCards = Array.from({ length: addCounter }, (_, i) => entryIndex + i + 1);
                const updatedFlashcards = prev.map((num) => (num > entryIndex ? num + addCounter : num));

                return [
                    ...updatedFlashcards.slice(0, insertPos + 1),
                    ...newCards,
                    ...updatedFlashcards.slice(insertPos + 1),
                ];
            }
        });

        setAddCounter(1);
    }

    function deleteItem(entryIndex: number) {
        if (flashcards.length > 4) {
            setFlashcards((prev) =>
                prev
                    .filter((num) => num !== entryIndex)
                    .map((num) => (num > entryIndex ? num - 1 : num))
            );
        } else {
            alert("You can't delete the first 4 flashcards!");
        }
    }

    return (
        <div>
            {flashcards.map((entryIndex) => (
                <div className="flex flex-col gap-2" key={`${entryIndex}`}>
                    <div className={`${bgColor} p-4 rounded-lg mt-4`}>
                        <FlashcardItem
                            onDelete={() => deleteItem(entryIndex)}
                            entryIndex={entryIndex}
                            txtareaBgCol={txtareaBgCol}
                            setQuestionsList={setQuestionsList}
                            setAnswersList={setAnswersList}
                        />
                    </div>
                    {flashcards.findLastIndex((index) => index === entryIndex) !== flashcards.length - 1 && (
                        <div
                            className="justify-center flex flex-row gap-2 h-2 w-full"
                            onMouseEnter={(e) => {
                                setHiddenMode(true);
                            }}
                            onMouseLeave={(e) => {
                                setHiddenMode(false);
                            }}
                        >
                            <a
                                className={`hover:flex flex-row items-center gap-2 rounded-full bg-blue-500 cursor-pointer ${hiddenMode ? "flex w-2 h-2" : "hidden w-0 h-0"}`}
                                onClick={(e) => {
                                    addItem(entryIndex);
                                    e.stopPropagation();
                                }}
                            >
                                <Plus fill="white" color="white" size={20} />
                            </a>
                        </div>
                    )}
                </div>
            ))}

            <div className="flex flex-row justify-center mt-4">
                <NewCardCounter
                    addCounter={addCounter}
                    setAddCounter={setAddCounter}
                    buttonCounter={buttonCounter}
                    addItem={addItem}
                />
            </div>
        </div>
    );
}
