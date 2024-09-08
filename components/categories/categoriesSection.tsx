import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function CategoriesSection(categoriesSection: {
  title: any;
  subCategories: any;
}) {
  const { title, subCategories } = categoriesSection;

  const categoriesElems = subCategories.map((subCategory: any) => (
    <li key={subCategory.subCategoryName}>
      <div className="flex flex-col items-center">
        <div className="flex justify-center items-center w-[60px] h-[60px]">
          <Image
            src={`https:${subCategory.subCategoryImage}`}
            alt="air conditioner"
            width="0"
            height="0"
            sizes="100vw"
            className="w-auto h-auto"
          />
        </div>
        <span className="text-[#666666]">{subCategory.subCategoryName}</span>
      </div>
    </li>
  ));

  return (
    <>
      <div className="flex gap-1 items-center my-4 font-semibold text-red-700">
        <h3>{title}</h3>
        <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4" />
      </div>
      <ul className="grid grid-cols-3 gap-4">{categoriesElems}</ul>
    </>
  );
}
