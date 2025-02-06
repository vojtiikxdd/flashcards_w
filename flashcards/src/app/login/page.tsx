export default function Login() {
    return (
        <main>
            <form className="flex flex-col absolute top-[45%] left-1/2 -translate-y-1/2 -translate-x-1/2 m-auto border-2 border-[#ffffffb5] border-dashed rounded-3xl w-[55rem] h-[30rem] bg-[#1f1f1f3d]">
                <label htmlFor="FirstName" />
                <input type="text" id="FirstName" />
                <label htmlFor="LastName" />
                <input type="text" id="LastName" />
                <label htmlFor="Email" />
                <input type="email" id="Email" />
                <label htmlFor="Password" />
                <input type="password" id="Password" />
            </form>
        </main>
    )
}