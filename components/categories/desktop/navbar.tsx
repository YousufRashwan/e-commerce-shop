import SubCats from "@/components/categories/desktop/categories/subCats";

import Image from "next/image";

import Link from "next/link";

import { getCats } from "@/lib/contentful/data";

export default async function Navbar() {
  const cats = await getCats();

  return (
    <div>
      <ul className="flex">
        {cats.map((cat) => {
          const { id, title, slug, url } = cat;
          return (
            <li key={slug} className="group hover:bg-white ">
              <Link href={`/sub-category/${slug}`}>
                <div className="p-3 border-b-[3px] border-b-transparent hover:text-red-500 hover:border-b-red-700 transition">
                  {title}
                </div>
              </Link>
              <div className="hidden group-hover:block w-full absolute right-0">
                <div className="bg-white">
                  <div className="max-w-[1500px] mx-auto p-6 px-24">
                    <div className="grid grid-cols-5">
                      <div className="col-span-4">
                        <SubCats catId={id} />
                      </div>
                      <div className="col-span-1 h-full flex items-center">
                        <Image
                          src={`https:${url}`}
                          alt={title}
                          width="0"
                          height="0"
                          sizes="100vw"
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-screen backdrop-brightness-50 block hover:hidden"></div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
