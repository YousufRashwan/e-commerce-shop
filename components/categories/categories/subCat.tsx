import SubSubCat from "@/components/categories/categories/subSubCat";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import { getSubSubCatsBySubCatId } from "@/lib/data";

export default async function SubCat({ subCat }: any) {
  const { id } = subCat.sys;
  const { subCategoriesTitle: title } = subCat.fields;

  const subSubCats = await getSubSubCatsBySubCatId(id);

  return (
    <div>
      <div className="flex gap-1 items-center my-4 font-semibold text-red-700">
        <h3>{title}</h3>
        <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4" />
      </div>
      <ul className="grid grid-cols-3 gap-4">
        {subSubCats.map((subSubCat) => (
          <SubSubCat key={subSubCat.sys.id} subSubCat={subSubCat} />
        ))}
      </ul>
    </div>
  );
}
