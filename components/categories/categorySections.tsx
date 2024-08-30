import CategoriesSection from "@/components/categories/categoriesSection";
import { CategorySectionsType } from "@/app/lib/definitions";

export default function CategorySections(
  categorySections: CategorySectionsType
) {
  let categorySectionElems = [];
  for (let key in categorySections) {
    if (categorySections.hasOwnProperty(key)) {
      categorySectionElems.push(
        <CategoriesSection
          key={categorySections[key].title}
          {...categorySections[key]}
        />
      );
    }
  }
  return <>{categorySectionElems}</>;
}
