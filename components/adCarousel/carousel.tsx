"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function AdCarousel({ images }: any) {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <Carousel
      dir="ltr"
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[plugin.current]}
      // onMouseEnter={plugin.current.stop}
      // onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((image: any) => {
          const { id } = image.sys;
          const { title } = image.fields;
          const { url } = image.fields.file;
          return (
            <CarouselItem key={id} className="basis-full">
              <Image
                src={`https:${url}`}
                className="object-cover object-center w-full h-[180px] md:h-[300px] md:rounded-xl lg:h-[400px]"
                alt={title}
                width="0"
                height="0"
                sizes="100vw"
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
}
