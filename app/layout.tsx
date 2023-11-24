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
import Head from "next/head";
import Script from "next/script";
import { Crisp } from "crisp-sdk-web";
import CrispChat from "../components/CrispChat";

let title = "AIHomeRenders | Build your home in seconds.";
let description = "AIHomeRenders";
// let ogimage = "https://myarchitectai.vercel.app/og-image.png";

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
    url: "https://aihomerenders.com",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-JQZ1BCDXW1"
      ></Script>
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-JQZ1BCDXW1', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <SupabaseProvider>
        <body style={{ zIndex: 2 }} className={inter.className}>
          <Providers>{children}</Providers>
          <CrispChat />
          <Analytics />
        </body>
      </SupabaseProvider>
    </html>
  );
}
