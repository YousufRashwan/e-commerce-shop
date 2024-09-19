import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import SubSubCats from "@/components/categories/desktop/categories/subSubCats";

import { getSubCatsByCatId } from "@/lib/contentful/data";

import Link from "next/link";

export default async function SubCats({ catId }: { catId: string }) {
  const subCats = await getSubCatsByCatId(catId);

  return (
    <ul className="grid grid-cols-4 gap-y-4 gap-1">
      {subCats.map((subCat) => {
        const { id, title, slug } = subCat;
        return (
          <li key={id}>
            <div>
              <div className=" text-red-700 font-semibold">
                <Link href={`/sub-category/${slug}`}>
                  <h3 className="inline-block">{title}</h3>
                  <div className="inline-block">
                    <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4" />
                  </div>
                </Link>
              </div>

              <div>
                <SubSubCats subCatId={id} />
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
