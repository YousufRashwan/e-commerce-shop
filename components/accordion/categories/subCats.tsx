import { AccordionContent } from "@/components/ui/accordion";

import { getSubCatsByCatId } from "@/lib/data";

export default async function SubCats({ catId }: { catId: string }) {
  const subCats = await getSubCatsByCatId(catId);

  return (
    <>
      {subCats.map((subCat: any) => {
        const { subCategoriesTitle: title } = subCat.fields;
        return <AccordionContent key={title}>{title}</AccordionContent>;
      })}
    </>
  );
}
