import Image from "next/image";
import Link from "next/link";

import CatsNav from "@/components/categories/desktop/navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faMagnifyingGlass,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import Searchbar from "@/components/searchbar";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <nav className="max-w-[1440px] flex justify-between items-center gap-4 m-auto p-4 lg:px-12">
        <Link href="/">
          <div className="w-[50px] h-[50px]">
            <Image
              src="/logo.png"
              alt="logo"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>
        </Link>
        <div className="hidden lg:block w-full">
          <Searchbar />
        </div>
        <div className="flex gap-8 text-gray-500">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="block lg:hidden w-6 h-6"
          />
          <Link
            href="/account"
            className="hidden lg:flex items-center gap-2 text-nowrap hover:text-red-600 transition-colors"
          >
            <FontAwesomeIcon icon={faUser} className="w-6 h-6" />
            <div className="flex flex-col">
              <small>التسجيل</small>
              <strong>دخول \ إنشاء حساب</strong>
            </div>
          </Link>
          <Link
            href="/wishlist"
            className="flex items-center gap-2 text-nowrap hover:text-red-600 transition-colors"
          >
            <FontAwesomeIcon icon={faHeart} className="w-6 h-6" />
            <div className="hidden lg:flex flex-col">
              <small>المفضلة</small>
              <strong>قائمة الأمنيات</strong>
            </div>
          </Link>
          <Link
            href="/cart"
            className="hidden lg:flex items-center gap-2 text-nowrap hover:text-red-600 transition-colors"
          >
            <FontAwesomeIcon icon={faCartShopping} className="w-6 h-6" />

            <div className="flex flex-col">
              <small>سلة المشتريات</small>
              <strong>0.00</strong>
            </div>
          </Link>
        </div>
      </nav>
      <div className="hidden lg:block bg-gray-100">
        <div className="px-20 max-w-[1440px] mx-auto">
          <CatsNav />
        </div>
      </div>
    </header>
  );
}
