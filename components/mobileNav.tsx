import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faBorderAll,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

export default function MobileNav() {
  return (
    <div className="sticky bottom-0">
      <nav className="flex justify-evenly bg-white py-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.25)] rounded-lg">
        <div className="flex flex-col items-center gap-1">
          <FontAwesomeIcon icon={faHouse} className="text-gray-500 w-6 h-6" />
          <div className="text-xs font-medium">الرئيسية</div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <FontAwesomeIcon
            icon={faBorderAll}
            className="text-gray-500 w-6 h-6"
          />
          <div className="text-xs font-medium">الاقسام</div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <FontAwesomeIcon icon={faUser} className="text-gray-500 w-6 h-6" />
          <div className="text-xs font-medium">حسابى</div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <FontAwesomeIcon
            icon={faCartShopping}
            className="text-gray-500 w-6 h-6"
          />
          <div className="text-xs font-medium">السلة</div>
        </div>
      </nav>
    </div>
  );
}
