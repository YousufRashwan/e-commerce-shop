import AdCarousel from "@/components/adCarousel";
import { createClient } from "contentful";

export async function getAdGallery() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "carouselGallery" });
  const carouselGallery: any = res.items[0].fields.carouselImages;
  const cg = carouselGallery.map((g: any) => ({
    id: g.sys.id,
    title: g.fields.title,
    src: g.fields.file.url,
  }));
  return cg;
}

export default async function AdCarouselGallery() {
  const carouselGallery: any = await getAdGallery();
  return <AdCarousel images={carouselGallery} />;
}
