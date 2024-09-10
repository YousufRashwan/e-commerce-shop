import Searchbar from "@/components/searchbar";
import AdCarGallery from "@/components/adCarousel/gallery";
import CatsCarousel from "@/components/categories/carousel/carousel";
import Gallery from "@/components/galleries/galleries";
import Accordion from "@/components/accordion/accordion";
import Footer from "@/components/footer/footer";

export default function Home() {
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
            <AdCarGallery />
          </div>
        </section>
        <section className="flex overflow-hidden mb-8">
          <div className="w-full">
            <CatsCarousel />
          </div>
        </section>
        <section className="flex px-4 mb-8">
          <div className="w-full">
            <Gallery />
          </div>
        </section>
        <section className="lg:hidden">
          <div className="bg-red-100">
            <Accordion />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
