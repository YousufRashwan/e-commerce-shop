"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getCategoryLinks } from "@/app/lib/data";

export default function Sidenav() {
  const pathname = usePathname();
  const links = getCategoryLinks();
  return (
    <nav className="w-1/4 h-full bg-gray-200 text-center overflow-y-scroll mb-4">
      {links.map((link) => {
        return (
          <Link key={link.href} href={link.href}>
            <div
              className={`text-sm p-4 px-2 border-b-[1px] border-gray-300 transition-colors
            ${
              link.href === pathname &&
              "border-l-4 border-l-red-800 bg-white text-black"
            }`}
            >
              {link.name}
            </div>
          </Link>
        );
      })}
    </nav>
  );
}
