import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import "../styles/globals.css";
import Providers from "../components/Providers";
import { Inter_Tight } from "next/font/google";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useSession } from "next-auth/react";
import { User, createClient } from "@supabase/supabase-js";
import Link from "next/link";
import { SupabaseProvider } from "../components/supabaseProvider";
import Header from "../components/Header";

let title = "Dream Room Generator";
let description = "Generate your dream room in seconds.";
let ogimage = "https://roomgpt-demo.vercel.app/og-image.png";
let sitename = "roomGPT.io";

const inter = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    images: [ogimage],
    title,
    description,
    url: "https://roomgpt-demo.vercel.app",
    siteName: sitename,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [ogimage],
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <SupabaseProvider>
        <body className={inter.className}>
          <Providers><Header />{children}</Providers>
          <Analytics />
        </body>
      </SupabaseProvider>
    </html>
  );
}
