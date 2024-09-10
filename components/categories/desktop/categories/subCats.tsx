import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import SubSubCats from "@/components/categories/desktop/categories/subSubCats";

import { getSubCatsByCatId } from "@/lib/data";

export default async function SubCats({ catId }: { catId: string }) {
  const subCats = await getSubCatsByCatId(catId);

  return (
    <ul className="grid grid-cols-4 gap-y-4 gap-1">
      {subCats.map((subCat: any) => {
        const { subCategoriesTitle: title } = subCat.fields;
        const { id } = subCat.sys;
        return (
          <li key={title}>
            <div>
              <div className="flex items-center text-red-700 font-semibold">
                <h3>{title}</h3>
                <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4" />
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
