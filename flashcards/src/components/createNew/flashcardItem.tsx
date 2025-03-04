import { SingleItem } from "./singleItem";

type Props = {
    txtareaBgCol: string;
    entryIndex: number;
}

export function FlashcardItem({ ...props }: Props) {
    return (
        <div className="pt-2">
            {props.entryIndex}
            <SingleItem
                label="Term"
                name="term"
                entryIndex={props.entryIndex}
                txtareaBgCol={props.txtareaBgCol}
            />
            <SingleItem
                label="Definition"
                name="definition"
                entryIndex={props.entryIndex}
                txtareaBgCol={props.txtareaBgCol}
            />
        </div>
    )
}