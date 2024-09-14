import Gallery from "@/components/galleries/gallery";

import { getHomePageGalleries } from "@/lib/contentful/data";

export default async function Galleries() {
  const galleries = await getHomePageGalleries();

  return (
    <>
      {galleries.map((gallery: any) => {
        const { id } = gallery.sys;
        const { galleryPhotos } = gallery.fields;
        return <Gallery key={id} photos={galleryPhotos} />;
      })}
    </>
  );
}
