import { AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import SubCats from "@/components/accordion/categories/subCats";

import { getCats } from "@/lib/contentful/data";

export default async function cats() {
  const cats = await getCats();

  return (
    <>
      {cats.map((cat: any) => {
        const { categoryPageName: title } = cat.fields;
        const { id } = cat.sys;
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
