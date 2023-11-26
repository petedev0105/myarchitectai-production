"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "@headlessui/react";
import { Dropdown } from "antd";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/dist/client/components/headers";
import { useSupabase } from "./supabaseProvider";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";

function SignInButton() {
  const { supabase, user, signInWithSupabase } = useSupabase();

  console.log(user);

  const items = [
    {
      key: "1",
      label: (
        <Link href="/render" className="">
          Dashboard
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <button className="text-red-500" onClick={() => handleSignOut()}>
          Log out
        </button>
      ),
    },
  ];

  async function handleSignOut() {
    try {
      const { error } = await supabase.auth.signOut();

      if (!error) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  }

  if (!user)
    return (
      <div className="space-x-10 flex items-center">
        <div>
          <Link className="font-semibold" href={"/pricing"}>
            Pricing
          </Link>
        </div>
        <button
          className="text-white font-bold bg-[#f22e61] px-5 py-2 rounded-full hover:bg-purple-500"
          onClick={signInWithSupabase}
        >
          Build My Home
        </button>
      </div>
    );

  return (
    <div className="space-x-10 flex items-center">
      <div>
        <Link className="font-semibold" href={"/pricing"}>
          Pricing
        </Link>
      </div>
      {user && (
        <Dropdown menu={{ items }}>
          <div className="cursor-pointer flex space-x-2 items-center">
            <span>{user.email}</span>
            <DownOutlined />
          </div>
        </Dropdown>
      )}
    </div>
  );
}

export default SignInButton;
