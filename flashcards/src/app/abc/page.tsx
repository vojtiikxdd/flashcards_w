import Link from 'next/link';

export default function UserProfile() {
    
    const session = false;

    if (session) {
      return (
        <main className="flex min-h-screen flex-col bg-[#120e1b]">
          <div className="flex flex-col">
            <Link href="/abc">prihlasen</Link>
          </div>
        </main>
      );
    }

    return( 
        <main className="flex min-h-screen flex-col bg-[#120e1b]">
            <h1 className="text-red-500">Ahoj</h1>
            <Link href="/">zpatky</Link>
        </main>
    );
}