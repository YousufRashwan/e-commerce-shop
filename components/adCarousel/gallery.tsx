import Carousel from "@/components/adCarousel/carousel";

import { getAds } from "@/lib/contentful/data";

export default async function Gallery() {
  const ads = await getAds();
  return <Carousel ads={ads} />;
}
