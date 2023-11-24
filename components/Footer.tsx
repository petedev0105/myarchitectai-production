import Link from "next/link";
import { useState, useEffect } from "react";
import { useSupabase } from "./supabaseProvider";
import { Divider } from "antd";

export default function Footer() {
  const { user, supabase } = useSupabase();

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
  return (
    <div className="w-full border-t py-10 SPACE-Y-5 lg:px-0 px-5">
      <div className="space-y-2 ">
        
      </div>
      <footer className="lg:flex w-full items-center justify-between lg:space-y-0 space-y-5">
        <div className="space-y-5">
          <div>
            <img src="/img/logo.png" className="h-7" />
          </div>
          <div>
            <span className="text-sm">
              © 2023 AiHomeRenders | All Rights Reserved
            </span>
          </div>
        </div>
        <div>
          <Link href={"https://tally.so/r/3jlLR4"} className="px-5 py-2 hover:bg-stone-800 rounded-md text-white bg-black font-semibold" target="_blank">Get in touch</Link>
        </div>
      </footer>
    </div>
  );
}
