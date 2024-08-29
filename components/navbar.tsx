import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faMagnifyingGlass,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import Searchbar from "./searchbar";

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
          <div className="hidden lg:flex items-center gap-2 text-nowrap">
            <FontAwesomeIcon icon={faUser} className="w-6 h-6" />
            <div className="flex flex-col">
              <small>التسجيل</small>
              <strong>دخول \ إنشاء حساب</strong>
            </div>
          </div>
          <div className="flex items-center gap-2 text-nowrap">
            <FontAwesomeIcon icon={faHeart} className="w-6 h-6" />
            <div className="hidden lg:flex flex-col">
              <small>المفضلة</small>
              <strong>قائمة الأمنيات</strong>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-2 text-nowrap">
            <FontAwesomeIcon icon={faCartShopping} className="w-6 h-6" />

            <div className="flex flex-col">
              <small>سلة المشتريات</small>
              <strong>0.00</strong>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
