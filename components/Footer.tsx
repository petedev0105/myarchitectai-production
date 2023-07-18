import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Footer() {
  const { data: session } = useSession();
  return (
    <footer className="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-5 flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-3 border-gray-500">
      <div className="text-left">
        <span className="font-bold text-stone-500">MyArchitectAI</span>
        <div>
          <span>Empowering architects in the digital age.</span>
        </div>
      </div>
      <div>
        {session ? (
          <button className="text-red-500" onClick={() => signOut()}>
            Sign out
          </button>
        ) : null}
      </div>
    </footer>
  );
}
