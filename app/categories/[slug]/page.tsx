import SubCat from "@/components/categories/categories/subCat";

import { client, getCatBySlug, getSubCatsByCatId } from "@/lib/data";

export async function generateStaticParams() {
  const { items: cats } = await client.getEntries({
    content_type: "productCategories",
  });

  return cats.map((cat) => ({
    slug: cat.fields.categoryPageSlug,
  }));
}

export default async function CategorySections({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const cat = await getCatBySlug(slug);
  const catId = cat.sys.id;
  const subCats = await getSubCatsByCatId(catId);

  return (
    <div className="px-4">
      {subCats.map((subCat) => (
        <SubCat key={subCat.sys.id} subCat={subCat} />
      ))}
    </div>
  );
}

export const dynamicParams = true;
export const revalidate = 60;
