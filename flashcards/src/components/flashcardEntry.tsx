import { Plus } from "lucide-react";

type Props = {
    bgColor: string;
    txtareaBgCol: string;
}

export default function FlashcardEntry({ ...props }: Props) {
    return (
        <div className={`${props.bgColor} p-4 rounded-lg mt-4`}>
            <div className="border-t border-gray-700 mt-2 pt-2">
                <textarea
                    placeholder="Term"
                    className={`${props.txtareaBgCol} w-full p-2 rounded-md text-white h-[46px] min-h-[40px] max-h-40`}
                ></textarea>
                <textarea
                    placeholder="Definition"
                    className={`${props.txtareaBgCol} w-full p-2 rounded-md text-white h-[46px] min-h-[40px] max-h-40 mt-2`}
                ></textarea>
            </div>

            {/* Kulaté tlačítko s plusem */}

            <div className="flex justify-center mt-4">
                <button 
                    onClick={() => console.log("clicked")}
                    className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg"
                >
                    <Plus size={30} />
                </button>
            </div>
        </div>
    );
}