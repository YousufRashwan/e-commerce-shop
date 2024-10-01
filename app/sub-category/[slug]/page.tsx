import { getProductsBySlug } from "@/lib/contentful/data";
import Products from "@/components/products/products";
import { notFound } from "next/navigation";

export default async function subCategory({
  params,
}: {
  params: { slug: string };
}) {
  const productsPage = await getProductsBySlug(params.slug);
  if (!productsPage) {
    notFound();
  }
  const { title, products } = productsPage;

  return (
    <div>
      {products.length ? (
        <div>
          <div className="p-4 mb-4">
            <h1 className="text-2xl font-extrabold">{title}</h1>
          </div>
          <div className="bg-gray-200 lg:bg-inherit">
            <Products products={products} />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-[calc(calc(100vh)-150px)] bg-gray-100 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mt-8 ">
            لا يوجد سلع من نوع ({title})
          </h1>
        </div>
      )}
    </div>
  );
}
