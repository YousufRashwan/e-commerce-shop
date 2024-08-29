import Image from "next/image";
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
        <Image src="/logo.png" alt="logo" width={50} height={50} />
        <div className="hidden lg:block w-full">
          <Searchbar />
        </div>
        <div className="flex gap-6 text-gray-500">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="block lg:hidden w-6"
          />
          <div className="hidden lg:flex items-center gap-2 text-nowrap">
            <FontAwesomeIcon icon={faUser} className="w-6" />
            <div className="flex flex-col">
              <small>التسجيل</small>
              <strong>دخول \ إنشاء حساب</strong>
            </div>
          </div>
          <div className="flex items-center gap-2 text-nowrap">
            <FontAwesomeIcon icon={faHeart} className="w-6" />
            <div className="hidden lg:flex flex-col">
              <small>المفضلة</small>
              <strong>قائمة الأمنيات</strong>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-2 text-nowrap">
            <FontAwesomeIcon icon={faCartShopping} className="w-6" />

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
