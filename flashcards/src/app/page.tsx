import Link from "next/link";

export default function Home() {

    const session = false; 
    /*
        this will be replaced with the actual session state from cookies
        will be after database will 100% work, prop this week (til 21.2)
    */
    
    const Name = "Adolf";
    const FirstLetter = Name.charAt(0);

    return (
        <main className="flex flex-1 flex-col">
            {session ? (
                <div className="flex absolute top-1/3 left-1/2 -translate-y-1/2 -translate-x-1/2 m-auto justify-center items-center">
                    <p className="text-[#fff] text-4xl font-medium relative">
                        Welcome back, <span className="bg-clip-text from-[#5e25da] to-[#da25d4] bg-gradient-to-r text-transparent font-bold duration-200 transition-all ease-in-out">{Name}</span>! <br />Wanna study sum?
                    </p>
                </div>
            ) : (
                <div className="flex absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 m-auto justify-center items-center">
                    <p className="text-[#fff] text-5xl font-medium relative">
                        <Link href="/login" className="bg-clip-text from-[#2592da] font-semibold to-[#da25d4] bg-gradient-to-r text-transparent hover:font-[900] duration-200 transition-all ease-in-out">
                            Log-in
                        </Link> and start learning with FlashCards!
                    </p>
                </div>
            )}
        </main>
    )
}
