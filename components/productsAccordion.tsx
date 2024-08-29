import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ProductsAccordion() {
  return (
    <Accordion type="single" collapsible className="border-y-[1px]">
      <AccordionItem value="item-1" className="px-4">
        <AccordionTrigger>أجهزة منزلية</AccordionTrigger>
        <AccordionContent>أجهزة المنزلية الكبيرة</AccordionContent>
        <AccordionContent>أجهزة المنزلية الصغيرة</AccordionContent>
        <AccordionContent>أجهزة متخصصة</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="px-4">
        <AccordionTrigger>أجهزة المطبخ</AccordionTrigger>
        <AccordionContent>أجهزة تحضير الإفطار</AccordionContent>
        <AccordionContent>أجهزة الفرم والتقطيع</AccordionContent>
        <AccordionContent>أجهزة الخلط</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
