import type { Metadata } from "next";
import { MainNav } from "@/components/layout/MainNav";
import { Footer } from "@/components/layout/Footer";
import { Figtree } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import { b } from "motion/react-client";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tezzeract",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(figtree.className, "antialiased", "bg-[#121212]")}>
      
      <MainNav />
        <main>{children}</main>
         
        <Footer />
             
      </body>
    </html>
  );
}