"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";

export default function NavLink({ name, link }: { name: any; link: any }) {
  let pathname = usePathname();
  pathname = pathname.split("/")[2];

  return (
    <Link href={link}>
      <div
        className={`text-sm p-4 px-2 border-b-[1px] border-gray-300 transition-colors
  ${link === pathname && "border-l-4 border-l-red-800 bg-white text-black"}`}
      >
        {name}
      </div>
    </Link>
  );
}
