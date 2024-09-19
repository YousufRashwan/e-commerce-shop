import Carousel from "@/components/adCarousel/carousel";

import { getAdGallery } from "@/lib/contentful/data";

export default async function Gallery() {
  const gallery = await getAdGallery();
  return <Carousel gallery={gallery} />;
}
