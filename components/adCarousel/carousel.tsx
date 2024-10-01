"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Ad } from "@/lib/definitions";

export default function AdCarousel({ ads }: { ads: Ad[] }) {
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
        {ads.map((ad) => {
          return (
            <CarouselItem
              key={ad.url}
              className="basis-full text-center relative"
            >
              <Link href={`/sub-category/${ad.slug}`}>
                <Image
                  src={`https:${ad.url}`}
                  alt={ad.title}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="object-cover object-center w-full h-[180px] md:h-[300px] md:rounded-xl lg:h-[400px]"
                />
                <div className="absolute w-full top-5 flex justify-center text-center">
                  <div className="bg-red-500 bg-opacity-50 text-white py-4 px-2 rounded-lg border border-white text-sm font-semibold overflow-hidden md:text-2xl md:bg-opacity-60 md:p-6  lg:text-3xl lg:bg-opacity-70 lg:p-8">
                    <div>{ad.title}</div>
                  </div>
                </div>
              </Link>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
}
