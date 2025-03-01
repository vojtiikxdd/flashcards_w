import { DivideIcon, Plus } from "lucide-react";

type Props = {
    bgColor: string;
    txtareaBgCol: string;
}

function addItem() {
    console.log("clicked");
}

export default function FlashcardEntry({ ...props }: Props) {
    return (
        <div>
            <div className={`${props.bgColor} p-4 rounded-lg mt-4`}>
                <div className="pt-2">
                    <textarea
                        placeholder="Term"
                        className={`${props.txtareaBgCol} w-full p-2 rounded-md text-white h-[46px] min-h-[40px] max-h-40`}
                    />
                    <textarea
                        placeholder="Definition"
                        className={`${props.txtareaBgCol} w-full p-2 rounded-md text-white h-[46px] min-h-[40px] max-h-40 mt-2`}
                    />
                </div>
            </div>
            <div className="flex justify-center mt-4">
                <button
    	            onClick={addItem} type="button"
                    className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg"
                >
                    <Plus size={30} />
                </button>
            </div>
        </div>
    );
}