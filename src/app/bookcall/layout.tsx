import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import clsx from "clsx";
import "../globals.css";
import favicon from "../../../public/favicon.ico";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Book a Call - Tezzeract",
};

export default function BookCallLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={favicon.src} />
      </head>
      <body className={clsx(figtree.className, "antialiased", "bg-[#121212]")}>
        <main>{children}</main>
      </body>
    </html>
  );
}