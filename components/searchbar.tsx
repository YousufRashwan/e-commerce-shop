import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Searchbar() {
  return (
    <div className="relative flex flex-1 flex-shrink-0 my-2">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        id="search"
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pr-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder="قولى بتدور على إيه ؟"
      />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="absolute right-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
      />
    </div>
  );
}
