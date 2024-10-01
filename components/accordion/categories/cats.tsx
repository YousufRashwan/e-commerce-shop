import { AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import SubCats from "@/components/accordion/categories/subCats";

import { getCats } from "@/lib/contentful/data";

export default async function cats() {
  const cats = (await getCats()).slice(0, 4);

  return (
    <>
      {cats.map((cat) => {
        const { id, title } = cat;
        return (
          <AccordionItem key={id} value={title} className="px-4">
            <AccordionTrigger>{title}</AccordionTrigger>
            <SubCats catId={id} />
          </AccordionItem>
        );
      })}
    </>
  );
}
