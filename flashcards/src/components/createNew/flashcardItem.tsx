import { SingleItem } from "./singleItem";

type Props = {
    txtareaBgCol: string;
    entryIndex: number;
    id: number;
}

export function FlashcardItem({ ...props }: Props) {
    return (
        <div className="pt-2 flex flex-col justify-between">
            {props.entryIndex}
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