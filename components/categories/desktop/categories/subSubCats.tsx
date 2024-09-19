import { getSubSubCatsBySubCatId } from "@/lib/contentful/data";

import Link from "next/link";

export default async function SubSubCat({ subCatId }: { subCatId: string }) {
  const subSubCats = await getSubSubCatsBySubCatId(subCatId);
  return (
    <ul>
      {subSubCats.map((subSubCat) => {
        const { title, slug } = subSubCat;
        return (
          <li key={title} className="hover:text-red-700 transition-colors">
            <Link href={`/sub-category/${slug}`}>{title}</Link>
          </li>
        );
      })}
    </ul>
  );
}
