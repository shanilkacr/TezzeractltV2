"use client";
import type { Metadata } from "next";
import { MainNav } from "@/components/layout/MainNav";
import { Footer } from "@/components/layout/Footer";
import { Figtree } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import { usePathname } from "next/navigation";
import favicon from "../../public/favicon.ico";

const figtree = Figtree({ subsets: ["latin"] });

// Move metadata outside since we're making this a client component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const hideNavAndFooter = pathname === "/book-call";

  return (
    <html lang="en">
      <head>
        <link rel="icon" href={favicon.src} />
        <title>Tezzeract</title>
      </head>
      <body className={clsx(figtree.className, "antialiased", "bg-[#121212]")}>
        {!hideNavAndFooter && <MainNav />}
        <main>{children}</main>
        {!hideNavAndFooter && <Footer />}
      </body>
    </html>
  );
}