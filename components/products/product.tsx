import Image from "next/image";

import { Product as ProductType } from "@/lib/definitions";

export default function Product({ product }: { product: ProductType }) {
  const { title, url, price } = product;
  return (
    <div className="bg-white border rounded-md p-4">
      <div className="h-[180px] flex items-center justify-center overflow-hidden">
        <Image
          src={`https:${url}`}
          alt={title}
          height={product.details.width}
          width={product.details.height}
          className="max-h-full w-auto"
        />
      </div>
      <h3 className="text-sm font-normal text-ellipsis line-clamp-2">
        {title}
      </h3>
      <span className="text-red-700 text-xl font-bold">{price} جنيه</span>
    </div>
  );
}
