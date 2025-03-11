import { CircleX } from 'lucide-react';

export function ErrorMessage({ error }: { error: string | undefined }) {
    return (
        <div className="flex mx-auto text-center  px-2 py-3 w-[350px] mt-4 bg-[#aa000058]  text-white border-2 border-solid border-red-600 rounded-lg items-center justify-start h-[3rem]">
            <CircleX size={30} className="py-1 absolute left-[205px] top-[80px]" color="#fb2626" />
            {error}
        </div>
    );
}