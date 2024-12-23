import Searchbar from "@/components/searchbar";
import AdCarGallery from "@/components/adCarousel/carousel";
import CatsCarousel from "@/components/categories/carousel/carousel";
import Galleries from "@/components/galleries/galleries";

import {
  getAds,
  getSubCats,
  getHomePageGalleries,
} from "@/lib/contentful/data";

export default async function Home() {
  const [ads, subCats, galleries] = await Promise.all([
    getAds(),
    getSubCats(),
    getHomePageGalleries(),
  ]);

  return (
    <>
      <div className="lg:px-8 max-w-[1440px] mx-auto">
        <section className="flex lg:hidden justify-center mb-4">
          <div className="w-full px-4">
            <Searchbar />
          </div>
        </section>
        <section className="flex justify-center mt-2 mb-4">
          <div className="w-full px-4">
            <AdCarGallery ads={ads} />
          </div>
        </section>
        <section className="flex overflow-hidden mb-8">
          <div className="w-full">
            <CatsCarousel subCats={subCats} />
          </div>
        </section>
        <section className="flex px-4 mb-8">
          <div className="w-full">
            <Galleries galleries={galleries} />
          </div>
        </section>
      </div>
    </>
  );
}
