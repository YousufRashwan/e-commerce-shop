import { getProductBySlug } from "@/lib/contentful/data";

import Image from "next/image";

import { Button } from "@/components/ui/button";

import Link from "next/link";

export default async function Product({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProductBySlug(params.slug);
  return (
    <div className="px-4">
      <div className="flex flex-col gap-4 pt-4 mb-4 lg:hidden">
        <h3>{product.brand}</h3>
        <h2 className="text-lg font-medium">
          ثلاجة فريش، نوفروست، 426 لتر، 2 باب، ديجيتال،موزع مياه، أستانلس،
          FNT-D540YT
        </h2>
      </div>
      <div className="lg:flex gap-4 py-4">
        <div className="mb-6">
          <div className="h-[360px] lg:w-[360px] flex justify-center items-center p-4 border rounded-lg bg-white overflow-hidden">
            <Image
              src={`https:${product.url}`}
              alt={product.title}
              width={product.details.width}
              height={product.details.height}
              className="max-h-full w-auto"
            />
          </div>
        </div>
        <div>
          <div className="hidden lg:flex flex-col gap-4 pt-4 mb-4 ">
            <h3>{product.brand}</h3>
            <h2 className="text-lg font-medium">
              ثلاجة فريش، نوفروست، 426 لتر، 2 باب، ديجيتال،موزع مياه، أستانلس،
              FNT-D540YT
            </h2>
          </div>
          <div className="font-bold mb-4">
            <span className="text-4xl text-red-700 ml-2">{product.price}</span>
            <span className="text-xl">جنيه</span>
          </div>
          <div className="mb-4">
            <Button className="bg-red-700 text-white font-semibold ">
              <Link href={`/product/${product.slug}/order`}>أطلب الأن</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="border rounded-lg bg-white py-6 px-2 mb-4">
        <h3 className=" text-red-700 font-semibold mb-2">نظرة عامة</h3>
        <ul className="list-disc pr-4">
          {product.overview.map((text) => (
            <li key={text} className="text-sm font-medium">
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
