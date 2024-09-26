import Footer from "@/components/footer/footer";
import Accordion from "@/components/accordion/accordion";

import { Suspense } from "react";

export default function CategoriesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Wrapping layou component in a Suspense is a temporary
  // Solution for loading component file not working for this route

  return (
    <Suspense
      fallback={
        <div className="h-[calc(calc(100vh)-150px)] grid items-center justify-center">
          <div className="text-4xl">جارى التحميل...</div>
        </div>
      }
    >
      <div className="lg:bg-gray-50">
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
    </Suspense>
  );
}
