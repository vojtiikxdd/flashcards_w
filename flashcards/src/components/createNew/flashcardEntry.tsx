import { DivideIcon, Plus } from "lucide-react";
import { FlashcardItem } from "./flashcardItem";

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
            <div className="flex justify-center mt-4">
                <button
                    onClick={() => addItem(props)} type="button"
                    className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg"
                >
                    <Plus size={30} />
                </button>
            </div>
        </div>
    );
}