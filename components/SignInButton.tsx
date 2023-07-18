"use client";
import React, { useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Menu } from "@headlessui/react";
import { Dropdown } from "antd";
import { useRouter } from "next/navigation";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/dist/client/components/headers";

function SignInButton() {
  const supabase = createClientComponentClient();
  const { data: session } = useSession();

  async function updateSupabaseUser() {
    try {
      console.log('upserting...')
      if (session && session.user != undefined) {
        const { data, error } = await supabase
          .from("myarchitectai_users")
          .upsert({ email: session.user.email })
          .select();

        if(data){
          console.log('success')
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  function test(){
    console.log('test')
  }

  useEffect(() => {
    if(session && session.user){
      updateSupabaseUser();
      console.log(session)
    }
  }, [])

  if (session && session.user) {
    return (
      <div className="space-x-5 flex items-center">
        <div>
          <Link href={"/dream-interior"}>
            <span className="font-bold text-stone-600">Interior</span>
          </Link>
        </div>
        <div>
          <Link href={"/dream"}>
            <span className="font-bold text-stone-600">Exterior</span>
          </Link>
        </div>
        {/* <button className="text-red-500" onClick={() => signOut()}>
          Sign out
        </button> */}
        {/* <span>{session.user.name}</span> */}
        {/* <img
          src={session.user.image ?? ""}
          className="rounded-full h-10 w-10"
        /> */}
      </div>
    );
  }
  return (
    <div className="space-x-5">
      <button
        className="text-white bg-black font-bold px-5 py-2 rounded-md"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </div>
  );
}

export default SignInButton;
