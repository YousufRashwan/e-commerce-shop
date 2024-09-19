import Product from "@/components/products/product";

import { Product as ProductType } from "@/lib/definitions";

import Link from "next/link";

export default function Products({ products }: { products: ProductType[] }) {
  return (
    <div className="grid grid-cols-2 xs:grid-cols-3 2xs:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 p-4">
      {products.map((product) => (
        <Link key={product.id} href={`/product/${product.slug}`}>
          <Product product={product} />
        </Link>
      ))}
    </div>
  );
}
