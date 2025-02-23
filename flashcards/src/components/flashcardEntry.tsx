import { Plus } from "lucide-react";

export default function FlashcardEntry() {
    return (
        <div className="bg-gray-800 p-4 rounded-lg mt-4">
            <div className="border-t border-gray-700 mt-2 pt-2">
                <textarea
                    placeholder="Term"
                    className="w-full bg-gray-700 p-2 rounded-md text-white"
                ></textarea>
                <textarea
                    placeholder="Definition"
                    className="w-full bg-gray-700 p-2 rounded-md text-white mt-2"
                ></textarea>
            </div>

            {/* Kulaté tlačítko s plusem */}

            <div className="flex justify-center mt-4">
                <button className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg">
                    <Plus size={30} />
                </button>
            </div>
        </div>
    );
}