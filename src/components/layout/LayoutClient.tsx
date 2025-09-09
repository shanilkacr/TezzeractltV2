"use client";

import { MainNav } from "@/components/layout/MainNav";
import { Footer } from "@/components/layout/Footer";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export function LayoutClient({
  children,
  figtreeClass,
}: {
  children: React.ReactNode;
  figtreeClass: string;
}) {
  const pathname = usePathname();
  const isBookCallPage = pathname === "/bookcall";

  return (
    <body className={clsx(figtreeClass, "antialiased", "bg-[#121212]")}>
      {!isBookCallPage && <MainNav />}
      <main>{children}</main>
      {!isBookCallPage && <Footer />}
    </body>
  );
}
