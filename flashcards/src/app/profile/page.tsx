import Link from 'next/link';
import {User} from 'lucide-react';

export default function UserProfile() {
    
    const session = true;
    const FirstLetter = "A";

    if (session) {
      return (
        <main>
            <div className="flex absolute top-[45%] left-1/2 -translate-y-1/2 -translate-x-1/2 m-auto border-2 border-[#ffffff60] border-dashed rounded-3xl w-[55rem] h-[30rem] bg-[#1f1f1f3d]">
              <div className='flex flex-col pl-8 pt-10'>
                <div className='border-white border-solid rounded-full bg-[#000] w-24 h-24 flex justify-center items-center text-4xl text-bold'>
                  {FirstLetter}
                </div>
              </div>
              <div></div>
            </div>
        </main>
      );
    }
    else { 
      return ( 
          <main className="flex min-h-screen flex-col">
              <h1 className="text-red-500">Ahoj</h1>
              <Link href="/">zpatky</Link>
          </main>
      );
  }
}