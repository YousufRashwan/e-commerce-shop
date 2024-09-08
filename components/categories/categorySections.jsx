import CategoriesSection from "@/components/categories/categoriesSection";

export default function CategorySections(categorySections) {
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
