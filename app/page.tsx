import Searchbar from "@/components/searchbar";
import AdCarousel from "@/components/adCarousel";
import CategoryCarousel from "@/components/categoryCarousel";
import HomeContTemp from "@/components/homeContTemp";
import ProductsAccordion from "@/components/productsAccordion";
import Brands from "@/components/brands";

export default function Home() {
  return (
    <main className="">
      <section className="flex justify-center mb-4">
        <div className="w-full px-4">
          <Searchbar />
        </div>
      </section>
      <section className="flex justify-center mb-4">
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
      <section className="">
        <div className="bg-red-100">
          <ProductsAccordion />
        </div>
      </section>
      <section>
        <Brands />
      </section>
    </main>
  );
}
