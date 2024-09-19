import SubSubCat from "@/components/categories/categories/subSubCat";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import { getSubSubCatsBySubCatId } from "@/lib/contentful/data";

import { SubCat as SubCatType } from "@/lib/definitions";

import Link from "next/link";

export default async function SubCat({ subCat }: { subCat: SubCatType }) {
  const { id, title, slug } = subCat;

  const subSubCats = await getSubSubCatsBySubCatId(id);

  return (
    <div>
      <Link href={`/sub-category/${slug}`}>
        <div className="flex gap-1 items-center my-4 font-semibold text-red-700">
          <h3>{title}</h3>
          <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4" />
        </div>
      </Link>

      <ul className="grid grid-cols-3 gap-4">
        {subSubCats.map((subSubCat) => (
          <SubSubCat key={subSubCat.id} subSubCat={subSubCat} />
        ))}
      </ul>
    </div>
  );
}
