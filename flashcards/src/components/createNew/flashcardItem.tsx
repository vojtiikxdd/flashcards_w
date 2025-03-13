import { SingleItem } from "./singleItem";
import { Trash2, ArrowUpDown } from "lucide-react";

type Props = {
    txtareaBgCol: string;
    entryIndex: number;
    onDelete: (entryIndex: number) => void;
    setQuestionsList: React.Dispatch<React.SetStateAction<string[]>>;
    setAnswersList: React.Dispatch<React.SetStateAction<string[]>>;
};

export function FlashcardItem({ setQuestionsList, setAnswersList, ...props }: Props) {
    return (
        <div className="pt-2 flex flex-col justify-between">
            <div className="flex flex-row justify-between mb-2">
                {props.entryIndex}
                <div className="flex flex-row gap-2">
                    <Trash2
                        style={{ color: "white", transition: "color 0.2s" }}
                        onMouseEnter={(e) => e.currentTarget.style.color = "#d4312b"}
                        onMouseLeave={(e) => e.currentTarget.style.color = "white"}
                        className="cursor-pointer"
                        onClick={() => props.onDelete(props.entryIndex)}
                    />
                    <ArrowUpDown 
                        style={{ color: "white", transition: "color 0.2s" }}
                        onMouseEnter={(e) => e.currentTarget.style.color = "#ffb00a"}
                        onMouseLeave={(e) => e.currentTarget.style.color = "white"}
                        className="cursor-pointer"
                    />
                </div>
            </div>

            <div className="flex flex-row justify-center gap-4">
                <SingleItem
                    id={props.entryIndex}
                    label="Term"
                    name="question"
                    entryIndex={props.entryIndex}
                    txtareaBgCol={props.txtareaBgCol}
                    setQuestionsList={setQuestionsList}
                    setAnswersList={setAnswersList}
                />
                <SingleItem
                    id={props.entryIndex}
                    label="Definition"
                    name="answer"
                    entryIndex={props.entryIndex}
                    txtareaBgCol={props.txtareaBgCol}
                    setQuestionsList={setQuestionsList}
                    setAnswersList={setAnswersList}
                />
            </div>
        </div>
    );
}
