import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="bg-[#3D3D3D] text-white py-5 px-4">
        <h3 className="text-lg font-bold mb-4">تواصل معانا</h3>
        <ul className="mb-2">
          <li className="text-sm mb-1 font-semibold">
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
          <h3 className="font-semibold mb-1">
            تابعنا على مواقع التواصل الإجتماعى
          </h3>
          <ul className="flex gap-4">
            <li className="text-center bg-red-600 p-2">
              <FontAwesomeIcon icon={faWhatsapp} className="w-4" />
            </li>
            <li className="text-center bg-red-600 p-2">
              <FontAwesomeIcon icon={faFacebook} className="w-4" />
            </li>
            <li className="text-center bg-red-600 p-2">
              <FontAwesomeIcon icon={faInstagram} className="w-4" />
            </li>
          </ul>
        </div>
      </div>
      <div className="p-4 bg-black text-white text-sm text-center">
        <p>©حقوق الطبع والنشر شركة الشروق 2024</p>
      </div>
    </footer>
  );
}
