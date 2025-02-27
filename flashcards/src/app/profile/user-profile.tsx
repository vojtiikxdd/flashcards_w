"use client"

import { User } from "@/utils/schemas";
import Link from 'next/link';
import { signOut } from '@/utils/supabase/actions';

export default function UserProfile({ user }: { user: User }) {
    return (
        <main>
            <div className="flex absolute top-[45%] left-1/2 -translate-y-1/2 -translate-x-1/2 m-auto border-2 border-[#ffffff60] border-dashed rounded-3xl w-[55rem] h-[30rem] bg-[#1f1f1f3d]">
                <div className='flex flex-col pl-8 pt-10'>
                    <div className='border-white border-solid rounded-full bg-[#000] w-24 h-24 flex justify-center items-center text-4xl text-bold'>
                        {user.nickname}
                    </div>
                    <div className='flex flex-col mt-4'>
                        {typeof user !== 'string' && user.nickname}
                    </div>
                </div>
                <Link href="/" onClick={() => signOut()} className="text-white bg-[#00000055]">
                    sign out
                </Link>
            </div>
        </main>
    )
}