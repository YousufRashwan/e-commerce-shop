import { AccordionContent } from "@/components/ui/accordion";

import { getSubCatsByCatId } from "@/lib/contentful/data";

import Link from "next/link";

export default async function SubCats({ catId }: { catId: string }) {
  const subCats = await getSubCatsByCatId(catId);

  return (
    <>
      {subCats.map((subCat) => {
        const { id, title, slug } = subCat;
        return (
          <AccordionContent key={id}>
            <Link
              href={`/sub-category/${slug}`}
              className=" hover:text-red-500"
            >
              {title}
            </Link>
          </AccordionContent>
        );
      })}
    </>
  );
}
