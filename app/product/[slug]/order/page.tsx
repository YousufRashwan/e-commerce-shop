import OrderForm from "@/components/products/orderForm";

import { getProductBySlug } from "@/lib/contentful/data";

export default async function OrderPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProductBySlug(params.slug);
  return (
    <div className="p-4">
      <OrderForm product={product} />
    </div>
  );
}
