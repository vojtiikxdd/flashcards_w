import { SingleItem } from "./singleItem";
import { Trash2 } from "lucide-react";

type Props = {
    txtareaBgCol: string;
    entryIndex: number;
    id: number;
}

export function FlashcardItem({ ...props }: Props) {
    return (
        <div className="pt-2 flex flex-col justify-between">
            <div className="flex flex-row justify-between mb-2">
                {props.entryIndex}
                <Trash2 
                    style={{ color: "white", transition: "color 0.2s" }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "#d4312b"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "white"}
                    className="cursor-pointer" 
                />
            </div>

            <div className="flex flex-row justify-center gap-4">
                <SingleItem
                    id={props.entryIndex}
                    label="Term"
                    name="term"
                    entryIndex={props.entryIndex}
                    txtareaBgCol={props.txtareaBgCol}
                />
                <SingleItem
                    id={props.entryIndex}
                    label="Definition"
                    name="definition"
                    entryIndex={props.entryIndex}
                    txtareaBgCol={props.txtareaBgCol}
                />
            </div>
        </div>
    )
}