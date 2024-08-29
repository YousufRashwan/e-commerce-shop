import Searchbar from "@/components/searchbar";
import AdCarousel from "@/components/adCarousel";
import CategoryCarousel from "@/components/categoryCarousel";
import HomeContTemp from "@/components/homeContTemp";
import ProductsAccordion from "@/components/productsAccordion";
import Brands from "@/components/brands";
import Footer from "@/components/footer";

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
            <AdCarousel />
          </div>
        </section>
        <section className="flex overflow-hidden mb-8">
          <div className="w-full">
            <CategoryCarousel />
          </div>
        </section>
        <section className="flex px-4 mb-8">
          <div className="w-full">
            <HomeContTemp />
          </div>
        </section>
        <section className="lg:hidden">
          <div className="bg-red-100">
            <ProductsAccordion />
          </div>
        </section>
        <section>
          <Brands />
        </section>
      </div>
      <Footer />
    </>
  );
}
