import { Accordion } from "@/components/ui/accordion";

import Cats from "@/components/accordion/categories/cats";

export default function catsAccordion() {
  return (
    <Accordion type="single" collapsible className="border-y-[1px]">
      <Cats />
    </Accordion>
  );
}
