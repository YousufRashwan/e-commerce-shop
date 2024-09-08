import CategorySections from "@/components/categories/categorySections";

import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export async function generateStaticParams() {
  const res = await client.getEntries({
    content_type: "productCategories",
  });
  const categoriesPages = res.items;
  return categoriesPages.map((cp) => ({
    id: cp.fields.categoryPageSlug,
  }));
}

export async function getSubCategoryObj(id) {
  const subtitles = await client.getEntries({
    content_type: "subCategoriesTitle",
  });

  let subCatObj = {};

  subtitles.items.map((subtitle) => {
    const { subCategoriesTitle } = subtitle.fields;
    const { categoryPageSlug } = subtitle.fields.mainCategoryReference.fields;
    if (categoryPageSlug === id) {
      subCatObj[subCategoriesTitle] = {
        title: subCategoriesTitle,
        subCategories: [],
      };
    }
  });

  const subCats = await client.getEntries({ content_type: "subCategories" });

  subCats.items.map((subCat) => {
    const { subCategoriesTitle } =
      subCat.fields.subCategoryTitleReference.fields;

    const { subCategoryName } = subCat.fields;
    const subCategoryImage = subCat.fields.subCategoryImage.fields.file.url;

    if (subCategoriesTitle in subCatObj) {
      subCatObj[subCategoriesTitle].subCategories.push({
        subCategoryName: subCategoryName,
        subCategoryImage: subCategoryImage,
      });
    }
  });

  return subCatObj;
}

export default async function CategorySectionsPage({ params }) {
  const categorySections = await getSubCategoryObj(params.id);
  return (
    <div className="px-4">
      {categorySections ? (
        <CategorySections {...categorySections} />
      ) : (
        <div className="text-red-500 text-4xl m-4">الصفحة غير موجودة</div>
      )}
    </div>
  );
}

export const dynamicParams = true;
export const revalidate = 60;
