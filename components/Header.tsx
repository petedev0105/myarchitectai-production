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
    <header className="absolute inset-x-0 top-0 lg:z-10 max-w-6xl mx-auto lg:px-0 px-5 z-50">
      <div className="mx-auto">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div>
                <img src="/img/logo.png" className="h-7" alt="Logo" />
              </div>
            </Link>
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

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:space-x-10 items-center font-semibold text-stone-700">
            <SignInButton />
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4 p-5 shadow-xl rounded-xl bg-white">
          <SignInButton />
        </div>
      )}
    </header>
  );
}



