import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { createClient } from "contentful";

export async function getCategories() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const categoryObj: any = {};

  const subtitles = await client.getEntries({
    content_type: "subCategoriesTitle",
  });

  subtitles.items.map((subtitle: any) => {
    const { categoryPageName } = subtitle.fields.mainCategoryReference.fields;
    categoryObj[categoryPageName] = {
      name: categoryPageName,
      subtitles: [],
    };
  });

  subtitles.items.map((subTitle: any) => {
    const { categoryPageName } = subTitle.fields.mainCategoryReference.fields;
    const { subCategoriesTitle } = subTitle.fields;
    categoryObj[categoryPageName].subtitles.push(subCategoriesTitle);
  });

  return categoryObj;
}

export default async function ProductsAccordion() {
  const category = await getCategories();

  const categoryElems = [];

  for (const [key, val] of Object.entries(category)) {
    categoryElems.push(
      <AccordionItem key={key} value={key} className="px-4">
        <AccordionTrigger>{key}</AccordionTrigger>
        {val.subtitles.map((subtitle: string) => (
          <AccordionContent key={subtitle}>{subtitle}</AccordionContent>
        ))}
      </AccordionItem>
    );
  }
  return (
    <Accordion type="single" collapsible className="border-y-[1px]">
      {categoryElems}
    </Accordion>
  );
}
