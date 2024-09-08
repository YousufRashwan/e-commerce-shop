import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#3D3D3D] lg:bg-red-100">
      <div className="max-w-[1440px] m-auto flex justify-between gap-4 text-white lg:text-black py-5 px-4 lg:px-12 lg:text-lg">
        <div>
          <h3 className="text-lg font-bold mb-4">تواصل معانا</h3>
          <ul className="mb-2">
            <li className=" mb-1 font-semibold">
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
              <FontAwesomeIcon icon={faPhone} className="inline-block w-3" />{" "}
              01281426037
            </li>
            <li className="mb-1">
              <FontAwesomeIcon icon={faPhone} className="inline-block w-3" />{" "}
              01281426037
            </li>
            <li>
              <FontAwesomeIcon icon={faWhatsapp} className="inline-block w-3" />{" "}
              01281426037
            </li>
          </ul>
          <div className="mb-2">
            <h3 className="font-semibold mb-2">
              تابعنا على مواقع التواصل الإجتماعى
            </h3>
            <ul className="flex gap-4 lg:text-white">
              <li className="flex justify-center items-center bg-red-600 p-2">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="w-4 h-4 lg:w-6 lg:h-6"
                />
              </li>
              <li className="flex justify-center items-center bg-red-600 p-2">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="w-4 h-4 lg:w-6 lg:h-6"
                />
              </li>
              <li className="flex justify-center items-center bg-red-600 p-2">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="w-4 h-4 lg:w-6 lg:h-6"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden lg:block">
          <h3 className="text-lg font-bold mb-4">أجهزة منزلية</h3>
          <ul>
            <li>أجهزة المنزلية الكبيرة</li>
            <li>أجهزة المنزلية الصغيرة</li>
            <li>أجهزة متخصصة</li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <h3 className="text-lg font-bold mb-4">أجهزة المطبخ</h3>
          <ul>
            <li>أجهزة تحضير الإفطار</li>
            <li>أجهزة الفرم والتقطيع</li>
            <li>أجهزة الخلط</li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <Image src="/logo.png" alt="logo" width={180} height={180} />
        </div>
      </div>

      <div className="flex justify-center items-center p-4 bg-black text-white text-sm lg:text-lg lg:h-[55px] lg:bg-[#3D3D3D]">
        <p>©حقوق الطبع والنشر شركة الشروق 2024</p>
      </div>
    </footer>
  );
}
