import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";

import Cats from "@/components/footer/categories/cats";

export default function Footer() {
  return (
    <footer className="bg-[#3D3D3D] lg:bg-red-100">
      <div className="lg:py-12">
        <div className="flex  max-w-[1440px] m-auto text-white lg:text-black py-5 px-4 lg:px-12 lg:text-lg">
          <div className="lg:pl-20">
            <div className="hidden lg:flex justify-center -mt-10">
              <Image src="/logo.png" alt="logo" width={90} height={90} />
            </div>
            <div className="block lg:hidden">
              <h3 className="text-lg font-bold mb-4">تواصل معانا</h3>
              <ul className="mb-2">
                <li className="mb-1 font-semibold">
                  <h3>
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className=" inline-block w-3"
                    />{" "}
                    بجوار بنك اسكندرية الجديد، ههيا، الشرقية، مصر{" "}
                    <span className="text-red-600">عرض علي الخريطة</span>
                  </h3>
                </li>
                <li className="mb-1">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="inline-block w-3"
                  />{" "}
                  01222222222
                </li>
                <li className="mb-1">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="inline-block w-3"
                  />{" "}
                  01222222222
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="inline-block w-3"
                  />{" "}
                  01222222222
                </li>
              </ul>
            </div>
            <div className="mb-2">
              <h3 className="font-semibold mb-2 lg:text-sm lg:text-center">
                تابعنا على مواقع التواصل الإجتماعى
              </h3>
              <ul className="flex gap-4 lg:text-white lg:justify-center">
                <li className="flex justify-center items-center bg-red-600 p-2">
                  <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4" />
                </li>
                <li className="flex justify-center items-center bg-red-600 p-2">
                  <FontAwesomeIcon icon={faFacebook} className="w-4 h-4" />
                </li>
                <li className="flex justify-center items-center bg-red-600 p-2">
                  <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between gap-10">
            <Cats />
            <div className="hidden lg:block">
              <h3 className=" text-lg font-extrabold mb-4">تواصل معانا</h3>
              <h3 className="mb-1 text-sm font-semibold">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className=" inline-block w-3"
                />{" "}
                بجوار بنك اسكندرية الجديد، ...، ........، مصر{" "}
                <span className="text-red-600">عرض علي الخريطة</span>
              </h3>
              <ul className="mb-2 text-base">
                <li className="mb-1">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="inline-block w-3"
                  />{" "}
                  01222222222
                </li>
                <li className="mb-1">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="inline-block w-3"
                  />{" "}
                  01222222222
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="inline-block w-3"
                  />{" "}
                  01222222222
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center p-4 bg-black text-white text-sm lg:text-lg lg:h-[55px] lg:bg-[#3D3D3D]">
        <p>©حقوق الطبع والنشر شركة الشروق 2024</p>
      </div>
    </footer>
  );
}
