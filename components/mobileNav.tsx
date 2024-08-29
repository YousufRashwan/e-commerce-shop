"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faBorderAll,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  let pathname = usePathname();
  pathname = `/${pathname.split("/")[1]}`;
  const links = [
    {
      href: "/",
      icon: faHouse,
      text: "الرئيسية",
    },
    {
      href: "/categories",
      icon: faBorderAll,
      text: "الاقسام",
    },
    {
      href: "/account",
      icon: faUser,
      text: "حسابى",
    },
    {
      href: "/cart",
      icon: faCartShopping,
      text: "السلة",
    },
  ];

  const linkElems = links.map((link) => {
    return (
      <Link key={link.href} href={link.href}>
        <div className="flex flex-col items-center gap-1 text-gray-700">
          <FontAwesomeIcon
            icon={link.icon}
            className={`w-6 h-6 ${pathname === link.href && "text-red-500"} `}
          />
          <div
            className={`text-xs font-medium ${
              pathname === link.href && "text-red-500"
            }`}
          >
            {link.text}
          </div>
        </div>
      </Link>
    );
  });

  return (
    <div className="lg:hidden sticky bottom-0">
      <nav className="flex justify-evenly bg-white py-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.25)] rounded-lg">
        {linkElems}
        {/* <Link key={"/"} href={"/"}>
          <div className="flex flex-col items-center gap-1 text-gray-700">
            <FontAwesomeIcon
              icon={faHouse}
              className={`w-6 h-6 ${pathname === "/" && "text-red-500"} `}
            />
            <div
              className={`text-xs font-medium ${
                pathname === "/" && "text-red-500"
              }`}
            >
              الرئيسية
            </div>
          </div>
        </Link>
        <Link key={"/categories"} href={"/categories"}>
          <div className="flex flex-col items-center gap-1 text-gray-700">
            <FontAwesomeIcon
              icon={faBorderAll}
              className={`w-6 h-6 ${
                pathname.split("/")[1] === "categories" && "text-red-500"
              } `}
            />
            <div
              className={`text-xs font-medium ${
                pathname.split("/")[1] === "categories" && "text-red-500"
              }`}
            >
              الاقسام
            </div>
          </div>
        </Link>
        <Link key={"/account"} href="/account">
          <div className="flex flex-col items-center gap-1 text-gray-700">
            <FontAwesomeIcon
              icon={faUser}
              className={`w-6 h-6 ${
                pathname === "/account" && "text-red-500"
              } `}
            />
            <div
              className={`text-xs font-medium ${
                pathname === "/account" && "text-red-500"
              }`}
            >
              حسابى
            </div>
          </div>
        </Link>
        <Link key={"/cart"} href="/cart">
          <div className="flex flex-col items-center gap-1 text-gray-700">
            <FontAwesomeIcon
              icon={faCartShopping}
              className={`w-6 h-6 ${pathname === "/cart" && "text-red-500"} `}
            />
            <div
              className={`text-xs font-medium ${
                pathname === "/cart" && "text-red-500"
              }`}
            >
              السلة
            </div>
          </div>
        </Link> */}
      </nav>
    </div>
  );
}
