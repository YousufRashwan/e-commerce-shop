import Image from "next/image";
import Link from "next/link";

import { SubCat } from "@/lib/definitions";

const Category = ({ subCat }: { subCat: SubCat }) => {
  const { title, slug, url } = subCat;
  return (
    <Link href={`/sub-category/${slug}`}>
      <div className="w-[90px] lg:w-[130px] flex flex-col items-center">
        <div className="w-full h-[90px] lg:h-[130px] flex justify-center items-center bg-white shadow-md rounded-full mb-3">
          <Image
            width="0"
            height="0"
            sizes="100vw"
            alt="category"
            src={`https:${url}`}
            className="w-2/3 h-auto"
          />
        </div>
        <p className="font-semibold text-sm">{title}</p>
      </div>
    </Link>
  );
};

export default Category;
