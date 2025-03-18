import { ChevronRight } from 'lucide-react';

export function SelectTrainingHorizontal() {
    return (
        <div
            className={`text-white bg-white bg-opacity-10 w-[360px] h-auto rounded-3xl p-3 flex flex-col gap-2 justify-evenly`}
        >
            <a className="cursor-not-allowed relative items-center pr-3 ease-in-out duration-200 hover:bg-[#3e3e3e] justify-between pb-2 h-auto w-full flex flex-row gap-3 rounded-lg">
                <div className="ml-2 max-w-[160px]">
                    <div className='flex flex-row gap-2'>
                        <p className="font-bold text-xl">Flashcards</p>
                        <div className='flex items-center italic'>i</div>
                    </div>
                    <p className='h-auto flex flex-wrap mt-2'>Review all cards in a row</p>
                </div>
                <ChevronRight size={20} color="white" className="absolute right-1 rounded-full bg-slate-400 w-[20px]" />
            </a>
            <div className='w-full h-[2px] bg-gradient-to-r p-0 from-[#36d7ff] to-[#00d15e]' />
            <a className="cursor-not-allowed relative items-center pr-3 ease-in-out duration-200 hover:bg-[#3e3e3e] justify-between pb-2 h-auto w-full flex flex-row gap-3 rounded-lg">
                <div className="ml-2 max-w-[160px]">
                    <div className='flex flex-row gap-2'>
                        <p className="font-bold text-xl">Take a test</p>
                        <div className='flex items-center italic'>i</div>
                    </div>
                    <p className='h-auto flex flex-wrap mt-2'>Randomized questions, customizable</p>
                </div>
                <ChevronRight size={20} color="white" className="absolute right-1 rounded-full bg-slate-400 w-[20px] " />
            </a>
            <div className='w-full h-[2px] bg-gradient-to-r p-0 from-[#36d7ff] to-[#00d15e]' />
            <a className="cursor-not-allowed items-center pr-3 ease-in-out duration-200 hover:bg-[#3e3e3e] justify-between pb-3 relative  h-auto w-full flex flex-row gap-3 rounded-lg">
                <div className="ml-2 max-w-[160px]">
                    <div className='flex flex-row gap-2'>
                        <p className="font-bold text-xl">Pexeso</p>
                        <div className='flex items-center italic'>i</div>
                    </div>
                    <p className='h-auto flex flex-wrap mt-2'>Matching game to have some fun</p>
                </div>
                <ChevronRight size={20} color="white" className="absolute right-1 rounded-full bg-slate-400 w-[20px]" />
            </a>
            <div className='w-full h-[2px] bg-gradient-to-r p-0 from-[#36d7ff] to-[#00d15e]' />
            <a className="cursor-not-allowed items-center pr-3 ease-in-out duration-200 hover:bg-[#3e3e3e] justify-betwee h-auto w-full flex relative flex-row gap-3 rounded-lg">
                <div className="ml-2 max-w-[160px]">
                    <div className='flex flex-row gap-2'>
                        <p className="font-bold text-xl">Type answer</p>
                        <div className='flex items-center italic'>i</div>
                    </div>
                    <p className='h-auto flex flex-wrap mt-2'>Answer by your words</p>
                </div>
                <ChevronRight size={20} color="white" className="absolute right-1 rounded-full bg-slate-400 w-[20px]" />
            </a>
        </div>
    );
}

export function SelectTraining() {
    return (
        <div
            className={`text-white bg-white bg-opacity-10 w-auto min-w-[600px] h-auto rounded-3xl p-3 mt-4 flex flex-row gap-2 justify-evenly`}
        >
            <a href="/myFlashcards" className="relative items-center pr-3 ease-in-out duration-200 hover:bg-[#3e3e3e] justify-between pb-2 h-auto w-full flex flex-row gap-3 rounded-lg">
                <div className="ml-2 max-w-[150px]">
                    <div className='flex flex-row gap-2'>
                        <p className="font-bold text-xl">Flashcards</p>
                        <div className='flex items-center'>i</div>
                    </div>
                    <p className='h-auto flex flex-wrap mt-2'>Review all cards in a row</p>
                </div>
                <ChevronRight size={20} color="white" className="absolute right-1 rounded-full bg-slate-400 w-[20px]" />
            </a>
            <div className='h-full w-[2px] bg-gradient-to-r p-0 from-[#36d7ff] to-[#00d15e]' />
            <a href="/myFlashcards" className="relative items-center pr-3 ease-in-out duration-200 hover:bg-[#3e3e3e] justify-between pb-2 h-auto w-full flex flex-row gap-3 rounded-lg">
                <div className="ml-2 max-w-[150px]">
                    <div className='flex flex-row gap-2'>
                        <p className="font-bold text-xl">Take a test</p>
                        <div className='flex items-center'>i</div>
                    </div>
                    <p className='h-auto flex flex-wrap mt-2'>Randomized questions, customizable</p>
                </div>
                <ChevronRight size={20} color="white" className="absolute right-1 rounded-full bg-slate-400 w-[20px] " />
            </a>
            <div className='h-full w-[2px] bg-gradient-to-r p-0 from-[#36d7ff] to-[#00d15e]' />
            <a href="/myFlashcards" className="items-center pr-3 ease-in-out duration-200 hover:bg-[#3e3e3e] justify-between pb-3 relative  h-auto w-full flex flex-row gap-3 rounded-lg">
                <div className="ml-2 max-w-[150px]">
                    <div className='flex flex-row gap-2'>
                        <p className="font-bold text-xl">Flashcards</p>
                        <div className='flex items-center'>i</div>
                    </div>
                    <p className='h-auto flex flex-wrap mt-2'>Review all cards in a row</p>
                </div>
                <ChevronRight size={20} color="white" className="absolute right-1 rounded-full bg-slate-400 w-[20px]" />
            </a>
            <div className='h-full w-[2px] bg-gradient-to-r p-0 from-[#36d7ff] to-[#00d15e]' />
            <a href="/myFlashcards" className="items-center pr-3 ease-in-out duration-200 hover:bg-[#3e3e3e] justify-betwee h-auto w-full flex relative flex-row gap-3 rounded-lg">
                <div className="ml-2 max-w-[150px]">
                    <div className='flex flex-row gap-2'>
                        <p className="font-bold text-xl">Flashcards</p>
                        <div className='flex items-center'>i</div>
                    </div>
                    <p className='h-auto flex flex-wrap mt-2'>Review all cards in a row</p>
                </div>
                <ChevronRight size={20} color="white" className="absolute right-1 rounded-full bg-slate-400 w-[20px]" />
            </a>
        </div>
    );
}