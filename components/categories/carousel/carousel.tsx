"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Category from "@/components/categories/carousel/category";

import { SubCat } from "@/lib/definitions";

export default function CatsCarousel({ subCats }: { subCats: SubCat[] }) {
  return (
    <Carousel
      dir="ltr"
      opts={{
        align: "start",
      }}
      className="w-full bg-gray-100 py-4"
    >
      <CarouselContent className="w-full pl-4">
        {subCats.map((subCat) => (
          <CarouselItem key={subCat.id} className="basis-auto">
            <Category subCat={subCat} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex top-[62px] lg:top-[81px] bg-red-600 text-white  hover:bg-red-600 hover:text-white hover:border-red-600" />
      <CarouselNext className="hidden md:flex top-[62px] lg:top-[81px] bg-red-600 text-white  hover:bg-red-600 hover:text-white hover:border-red-600" />
    </Carousel>
  );
}
