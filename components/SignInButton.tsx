"use client";
import React, { useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Menu } from "@headlessui/react";
import { Dropdown } from "antd";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/dist/client/components/headers";
import { useSupabase } from '../components/supabaseProvider';

function SignInButton() {
  // const supabase = createClientComponentClient();
  const { data: session } = useSession();
  const { supabase, user, signInWithSupabase } = useSupabase();
  

  // async function signInwithSupabase(){
  //   try {
  //     const {data, error} = await supabase.auth.signInWithOAuth({
  //     provider: 'google'
  //   })
  //   } catch(error){
  //     console.log(error)
  //   }
    
  // }


  // useEffect(() => {
  //   if(session && session.user){
  //     updateSupabaseUser();
  //     console.log(session)
  //   }
  // }, [])

  if(!user)
  return (
    <div className="space-x-5">
      <button
        className="text-white bg-black font-bold px-5 py-2 rounded-md"
        onClick={signInWithSupabase}
      >
        Sign in
      </button>
    </div>
  );

  return (
    <div></div>
  )
}

export default SignInButton;
