import Image from "next/image";

import { Gallery as GalleryType } from "@/lib/definitions";

export default async function Galleries({
  galleries,
}: {
  galleries: GalleryType[];
}) {
  return (
    <>
      {galleries.map((gallery) => {
        const { images } = gallery;
        return (
          <div className="w-full mb-12" key={images[0].url}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="col-span-2 md:col-span-3 row-span-2">
                {/* <Image
                  src={`https:${images[0].url}`}
                  className="w-full h-auto"
                  alt={images[0].title}
                  width="0"
                  height="0"
                  sizes="100vw"
                /> */}
                <h2 className="text-4xl text-center text-red-600 font-semibold py-4">
                  عيش تجربة طبخ مختلفة
                </h2>
              </div>
              <div className="col-span-1 row-span-2">
                <Image
                  src={`https:${images[0].url}`}
                  className="w-full h-auto rounded-[3rem]"
                  alt={images[0].title}
                  width="0"
                  height="0"
                  sizes="100vw"
                />
              </div>
              <div className="col-span-1 row-span-1">
                <Image
                  src={`https:${images[1].url}`}
                  className="w-full h-auto rounded-[3rem]"
                  alt={images[1].title}
                  width="0"
                  height="0"
                  sizes="100vw"
                />
              </div>
              <div className="col-span-1 row-span-1">
                <Image
                  src={`https:${images[2].url}`}
                  className="w-full h-auto rounded-[3rem]"
                  alt={images[2].title}
                  width="0"
                  height="0"
                  sizes="100vw"
                />
              </div>
              <div className="col-span-1 row-span-1">
                <Image
                  src={`https:${images[3].url}`}
                  className="w-full h-auto rounded-[3rem]"
                  alt={images[3].title}
                  width="0"
                  height="0"
                  sizes="100vw"
                />
              </div>
              <div className="col-span-1 row-span-1">
                <Image
                  src={`https:${images[4].url}`}
                  className="w-full h-auto rounded-[3rem]"
                  alt={images[4].title}
                  width="0"
                  height="0"
                  sizes="100vw"
                />
              </div>
              {/* <div className="col-span-1 row-span-1">
                <Image
                  src={`https:${images[6].url}`}
                  className="w-full h-auto rounded-[3rem]"
                  alt={images[6].title}
                  width="0"
                  height="0"
                  sizes="100vw"
                />
              </div>
              <div className="col-span-1 row-span-1">
                <Image
                  src={`https:${images[7].url}`}
                  className="w-full h-auto rounded-[3rem]"
                  alt={images[7].title}
                  width="0"
                  height="0"
                  sizes="100vw"
                />
              </div>
      
              <div className="hidden md:block">
                <Image
                  src={`https:${images[8].url}`}
                  className="w-full h-auto rounded-[3rem]"
                  alt={images[8].title}
                  width="0"
                  height="0"
                  sizes="100vw"
                />
              </div> */}
            </div>
          </div>
        );
      })}
    </>
  );
}
