import Gallery from "@/components/galleries/gallery";

import { getHomePageGalleries } from "@/lib/contentful/data";

export default async function Galleries() {
  const galleries = await getHomePageGalleries();

  return (
    <>
      {galleries.map((gallery) => (
        <Gallery key={gallery.id} gallery={gallery} />
      ))}
    </>
  );
}
