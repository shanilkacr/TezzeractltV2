import type { Metadata } from "next";
import {Figtree } from "next/font/google";
import clsx from "clsx";
import "./globals.css";

const figtee = Figtree({ subsets: ["latin"] });

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
      <body className={clsx(figtee.className, "antialiased")}>{children}</body>
    </html>
  );
}
