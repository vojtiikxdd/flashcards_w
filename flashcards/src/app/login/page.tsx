export default function Login() {
    return (
        <main>
            <form className="flex flex-col absolute top-[45%] left-1/2 -translate-y-1/2 -translate-x-1/2 m-auto border-2 border-[#141414] border-dashed rounded-3xl w-[45rem] h-[25rem] bg-[#1f1f1f3d] ">
                <div className="flex flex-row justify-center items-center mt-[2%] relative">
                    <h1 className="text-4xl text-[#f1f1f1] text-center font-bold">Log-in! <span className="italic font-extralight">other</span></h1>
                    <div className="absolute right-3 bg-gray-500 w-[100px] h-[30px] rounded-3xl"></div>
                </div>
                <div className="flex flex-row relative items-center justify-between">
                    <label htmlFor="FirstName" className="absolute">Jméno</label>
                    <input type="text" id="FirstName" className="mx-auto rounded w-96 h-10 mt-[6%]" />
                </div>

            </form>
        </main>
    )
}