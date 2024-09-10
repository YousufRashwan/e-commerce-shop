import Carousel from "@/components/adCarousel/carousel";

import { getAdGallery } from "@/lib/data";

export default async function Gallery() {
  const gallery: any = await getAdGallery();
  const { carouselImages: images } = gallery.fields;
  return <Carousel images={images} />;
}
