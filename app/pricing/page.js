"use client";
import React from "react";
import Header from "../../components/Header";
import { useSupabase } from "../../components/supabaseProvider";
import Link from "next/link";
import Footer from "../../components/Footer";
import Pricing from "../../components/Pricing";

function page() {
  // const { supabase, user, signInWithSupabase } = useSupabase();
  return (
    <div className=" max-w-6xl mx-auto">
      <Header />
      <Pricing />
      <div className="pt-24">
        <Footer />
      </div>
    </div>
  );
}

export default page;
