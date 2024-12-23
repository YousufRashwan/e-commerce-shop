import Link from "next/link";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import { getSubCatsByCatId } from "@/lib/contentful/data";

import { Cat } from "@/lib/definitions";

export default async function catsAccordion({ cats }: { cats: Cat[] }) {
  // fetching the categories
  const renderedCats = await Promise.all(
    cats.map(async (cat) => {
      const subCats = await getSubCatsByCatId(cat.id);

      const renderedSubcats = subCats.map((subCat) => (
        <AccordionContent key={subCat.id}>
          <Link
            href={`/sub-category/${subCat.slug}`}
            className=" hover:text-red-500"
          >
            {subCat.title}
          </Link>
        </AccordionContent>
      ));

      return (
        <AccordionItem key={cat.id} value={cat.title} className="px-4">
          <AccordionTrigger>{cat.title}</AccordionTrigger>
          {renderedSubcats}
        </AccordionItem>
      );
    })
  );

  return (
    <Accordion type="single" collapsible className="border-y-[1px]">
      {renderedCats}
    </Accordion>
  );
}
