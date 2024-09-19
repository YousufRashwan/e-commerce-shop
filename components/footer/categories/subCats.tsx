import { getSubCatsByCatId } from "@/lib/contentful/data";

import Link from "next/link";

export default async function SubCats({ catId }: { catId: string }) {
  const subCats = await getSubCatsByCatId(catId);

  return (
    <ul>
      {subCats.map((subCat) => (
        <Link key={subCat.title} href={`/sub-category/${subCat.slug}`}>
          <li className="hover:text-red-700 transition-colors">
            {subCat.title}
          </li>
        </Link>
      ))}
    </ul>
  );
}
