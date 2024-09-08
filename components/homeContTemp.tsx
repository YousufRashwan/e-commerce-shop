import HomePageCategories from "./homePageCategories";

import { createClient } from "contentful";

export async function getHomePageGallery() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const res = await client.getEntries({ content_type: "homePageGallery" });
  const homePageGallery = res.items;

  const homeContent = homePageGallery.map((gallery: any) => {
    const id = gallery.sys.id;
    const images = gallery.fields.galleryPhotos.map((galleryPhoto: any) => ({
      alt: galleryPhoto.fields.title,
      src: galleryPhoto.fields.file.url,
    }));
    return {
      id: id,
      images: images,
    };
  });

  return homeContent;
}

export default async function HomeContTemp() {
  const homeContent = await getHomePageGallery();

  return (
    <>
      {homeContent.map((content) => (
        <HomePageCategories key={content.id} imageArray={content.images} />
      ))}
    </>
  );
}
