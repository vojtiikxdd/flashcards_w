import { DivideIcon, Plus } from "lucide-react";
import { FlashcardItem } from "./flashcardItem";
import { useState } from "react";
import { NewCardCounter } from "./newCard&Counter";

let id = 4;


type Props = {
    bgColor: string;
    txtareaBgCol: string;
}

function IndexIdCreator() {
    id++;
    return id;
}

export default function FlashcardEntry({ ...props }: Props) {
    const [addCounter, setAddCounter] = useState(1);
    const [flashcards, setFlashcards] = useState<number[]>([1, 2, 3, 4]);

    function buttonCounter(e: React.MouseEvent<HTMLButtonElement>) {
        if (e.currentTarget.textContent === "+") {
            if (addCounter < 20) setAddCounter(addCounter + 1);
        } else if (e.currentTarget.textContent === "-") {
            if (addCounter > 1) setAddCounter(addCounter - 1);
        }
    }

    function addItem() {
        setFlashcards((prev) => [...prev, IndexIdCreator()]);
    }

    return (
        <div>
            {flashcards.map((entryIndex) => (
                <div key={entryIndex} className={`${props.bgColor} p-4 rounded-lg mt-4`}>
                    <FlashcardItem entryIndex={entryIndex} txtareaBgCol="txtareaBgLightGrey" />
                </div>
            ))}
            <div className="flex flex-row justify-center mt-4">
                <NewCardCounter addCounter={addCounter} setAddCounter={setAddCounter} buttonCounter={buttonCounter} addItem={addItem} />
            </div>
        </div>
    );
}