"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Menu } from "@headlessui/react";

function SignInButton() {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="space-x-5 flex items-center">
        <div>
            <Link href={'/dream-interior'}><span className="font-bold text-stone-600">Interior</span></Link>
          
        </div>
        <div>
            <Link href={'/dream'}><span className="font-bold text-stone-600">Exterior</span></Link>
          
        </div>
        {/* <button className="text-red-500" onClick={() => signOut()}>
          Sign out
        </button> */}
        {/* <span>{session.user.name}</span> */}
        <img
          src={session.user.image ?? ""}
          className="rounded-full h-10 w-10"
        />

        
      </div>
    );
  }
  return (
    <div className="space-x-5">
      <button
        className="text-white bg-blue-500 px-5 py-2 rounded-md"
        onClick={() => signIn()}
      >
        Sign in
      </button>
      
    </div>
  );
}

export default SignInButton;
