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

let title = "MyArchtectAI";
let description = "MyArchtectAI";
let ogimage = "https://myarchitectai.vercel.app/og-image.png";

const inter = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title,
    description,
    url: "https://myarchitectai.vercel.app",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
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
          <Providers>{children}</Providers>
          <Analytics />
        </body>
      </SupabaseProvider>
    </html>
  );
}
