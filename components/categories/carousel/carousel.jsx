"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Category from "@/components/categories/carousel/category";

export default function CategoryCarousel() {
  const categories = [
    {
      src: "homeappliances.png",
      name: "أجهزة منزلية",
    },
    {
      src: "kitchenappliances.png",
      name: "أجهزة المطبخ",
    },
    {
      src: "airconditioners.png",
      name: "تكييفات",
    },
    {
      src: "screens.png",
      name: "شاشات",
    },
  ];
  return (
    <Carousel
      dir="ltr"
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent className="w-full pl-4">
        {categories.map((category) => (
          <CarouselItem key={category.src} className="basis-auto">
            <Category src={category.src} name={category.name} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
