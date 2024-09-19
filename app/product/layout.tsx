import Footer from "@/components/footer/footer";
import Accordion from "@/components/accordion/accordion";

export default function CategoriesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-gray-50">
      <div className="min-h-[calc(calc(100vh)-150px)] lg:px-8 max-w-[1440px] mx-auto">
        <div>{children}</div>
      </div>
      <section className="lg:hidden">
        <div className="bg-red-100">
          <Accordion />
        </div>
      </section>
      <Footer />
    </div>
  );
}
