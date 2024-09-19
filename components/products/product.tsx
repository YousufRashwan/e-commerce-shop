import Image from "next/image";

import { Product as ProductType } from "@/lib/definitions";

export default function Product({ product }: { product: ProductType }) {
  const { title, url, slug, price } = product;
  return (
    <div className="bg-white border rounded-md p-4">
      <div className="h-[180px] flex items-center overflow-hidden">
        <Image
          src={`https:${url}`}
          alt={title}
          height="0"
          width="0"
          sizes="100vh"
          className="h-auto w-full"
        />
      </div>
      <h3 className="text-sm font-normal text-ellipsis line-clamp-2">
        غسالة أطباق وايت بوينت 10 افرد، 45 سم، 5 برامج، فضي، WPD 105 DS
      </h3>
      <span className="text-red-700 text-xl font-bold">{price} جنيه</span>
    </div>
  );
}
