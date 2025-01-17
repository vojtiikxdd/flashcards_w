import Link from 'next/link';

export default function UserProfile() {
    
    const session = true;

    if (session) {
      return (
        <main className="flex min-h-screen flex-col">
          <div className="flex flex-col">
            <Link href="/abc">prihlasen</Link>
            <Link href="/"></Link>
          </div>
        </main>
      );
    }

    return( 
        <main className="flex min-h-screen flex-col">
            <h1 className="text-red-500">Ahoj</h1>
            <Link href="/">zpatky</Link>
        </main>
    );
}