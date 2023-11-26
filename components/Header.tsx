"use client";
import Image from "next/image";
import Link from "next/link";
import SignInButton from "./SignInButton";
import { useSupabase } from "./supabaseProvider";
import { useState } from "react";

export default function Header() {
  const { packageType, user } = useSupabase();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <header className="lg:px-0 lg:px-5 flex items-center w-full mt-5 pb-7 justify-between ">
        <div className="flex space-x-12 items-center">
          <Link href="/" className="flex space-x-2">
            <h1 className="text-2xl ml-2 tracking-tight">
              <img src="/img/logo.png" className="h-7" />
            </h1>
          </Link>

          <div className="flex items-center space-x-5"></div>
        </div>{" "}

        <div className="hidden lg:flex">
          <SignInButton />
        </div>

         {/* Mobile Menu Button */}
         <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-black p-2 rounded-md outline-none hover:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        

        {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden p-5 shadow-xl rounded-xl bg-white absolute w-full top-24 border-t">
          <SignInButton />
        </div>
      )}
      </header>
    </>
  );
}



