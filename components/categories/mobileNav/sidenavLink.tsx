"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";

export default function NavLink({
  title,
  slug,
}: {
  title: string;
  slug: string;
}) {
  let pathname = usePathname();
  pathname = pathname.split("/")[2];

  return (
    <Link href={slug}>
      <div
        className={`text-sm p-4 px-2 border-b-[1px] border-gray-300 transition-colors
  ${slug === pathname && "border-l-4 border-l-red-800 bg-white text-black"}`}
      >
        {title}
      </div>
    </Link>
  );
}
