import SubCat from "@/components/categories/categories/subCat";

import {
  getCats,
  getCatBySlug,
  getSubCatsByCatId,
} from "@/lib/contentful/data";

import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const cats = await getCats();

  return cats.map((cat) => ({
    slug: cat.slug,
  }));
}

export default async function CategorySections({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const cat = await getCatBySlug(slug);
  if (!cat) {
    notFound();
  }
  const catId = cat.id;
  const subCats = await getSubCatsByCatId(catId);

  return (
    <div className="px-4">
      {subCats.map((subCat) => (
        <SubCat key={subCat.id} subCat={subCat} />
      ))}
    </div>
  );
}

export const dynamicParams = true;
export const revalidate = 60;
