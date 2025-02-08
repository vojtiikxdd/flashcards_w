import "@/app/globals.css"

{/*zde script*/ }

{/*
  for (let x of document.getElementsByTagName('input')) {
  x.oninput = () => {
    if (x.value === "") {
      x.classList.remove('valid');
    } else {
      x.classList.add('valid');
    }
  }
}
  */}

export default function Login() {
  return (
    <main>
      <form action="" className="flex flex-col absolute top-[45%] left-1/2 -translate-y-1/2 -translate-x-1/2 m-auto border-2 border-[#141414] border-dashed rounded-3xl w-[45rem] h-[25rem] bg-[#1f1f1f3d] ">
        <div className="flex flex-row justify-center items-center mt-[2%] relative">
          <h1 className="text-4xl text-[#f1f1f1] text-center font-bold">Log-in! <span className="italic font-extralight">other</span></h1>
          <div className="absolute right-3 bg-gray-500 w-[100px] h-[30px] rounded-3xl">
            {/*
              v tomto divu bude prepinac mezi login a register
            */}
          </div>
        </div>
        <div className="flex flex-row cursor-pointer relative items-center justify-between labelMovement">
          <input type="text" id="nicknameInput" placeholder="nickname" className="mx-auto p-2 text-xl font-semibold rounded-xl w-96 h-10 mt-[6%] focus:outline-none outline-[#222222]  border-2 border-solid border-[#d7d7d7] focus:border-[#7c46a3] ease-in-out duration-300 bg-[transparent] selection:bg-[#101010] cursor-pointer focus:cursor-text hover:border-[#a255f0]" />
          {/*<label htmlFor="Nickname" id="loginLabel" className="absolute bottom-[0.35rem] left-[11rem] font-semibold text-xl cursor-pointer focus:cursor-text select-none bg-[#1f1f1f] px-2">Nickname</label>
          
          nedokazal jsem to udelat takhle z fleku, udelam nekdy v tydnu*/}
        </div>
        <div className="flex flex-row cursor-pointer relative items-center justify-between labelMovement">
          <input type="password" id="passwordInput" placeholder="password" className="mx-auto p-2 text-xl font-semibold rounded-xl w-96 h-10 mt-[2%] focus:outline-none outline-[#222222]  border-2 border-solid border-[#d7d7d7] focus:border-[#7c46a3] ease-in-out duration-300 bg-[transparent] selection:bg-[#101010] cursor-pointer focus:cursor-text hover:border-[#a255f0]" />
        </div>
        <div className="flex flex-row cursor-pointer relative items-center justify-between labelMovement">
          <input type="password" id="passwordInput" placeholder="password again" className="mx-auto p-2 text-xl font-semibold rounded-xl w-96 h-10 mt-[2%] focus:outline-none outline-[#222222]  border-2 border-solid border-[#d7d7d7] focus:border-[#7c46a3] ease-in-out duration-300 bg-[transparent] selection:bg-[#101010] cursor-pointer focus:cursor-text hover:border-[#a255f0]" />
        </div>
        <div className="flex flex-row cursor-pointer relative items-center justify-between labelMovement">
          <input type="email" id="passwordInput" placeholder="password again" className="mx-auto p-2 text-xl font-semibold rounded-xl w-96 h-10 mt-[2%] focus:outline-none outline-[#222222]  border-2 border-solid border-[#d7d7d7] focus:border-[#7c46a3] ease-in-out duration-300 bg-[transparent] selection:bg-[#101010] cursor-pointer focus:cursor-text hover:border-[#a255f0]" />
        </div>
        <div className="flex flex-row cursor-pointer relative items-center justify-between labelMovement">
          {/*onclick na button*/}
          <button id="passwordInput" className="self-center w-96 h-10 mx-auto text-xl font-semibold text-white border-2 border-solid rounded-xl mt-[3%] bg-violet-400 hover:bg-violet-500 focus:bg-violet-600 ">Send</button> 
        </div>
      </form>
    </main>
  )
}