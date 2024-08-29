import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faMagnifyingGlass,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <nav className="flex justify-between p-4">
        <div>
          <Image src="/logo.png" alt="logo" width={50} height={50} />
        </div>
        <div className="flex gap-6">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="w-6" />
          <FontAwesomeIcon icon={faHeart} className="w-6" />
        </div>
      </nav>
    </header>
  );
}
