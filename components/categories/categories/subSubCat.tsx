import Image from "next/image";

import { SubSubCat as SubSubCatType } from "@/lib/definitions";

import Link from "next/link";

export default async function SubSubCat({
  subSubCat,
}: {
  subSubCat: SubSubCatType;
}) {
  const { title, url, slug } = subSubCat;
  return (
    <Link href={`/sub-category/${slug}`}>
      <li>
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center w-[60px] h-[60px]">
            <Image
              src={`https:${url}`}
              alt="air conditioner"
              width="0"
              height="0"
              sizes="100vw"
              className="w-auto h-auto max-w-full max-h-full"
            />
          </div>
          <span className="text-[#666666]">{title}</span>
        </div>
      </li>
    </Link>
  );
}
