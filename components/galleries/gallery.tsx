import Image from "next/image";
import { Gallery as GalleryType } from "@/lib/definitions";

export default function Gallery({ gallery }: { gallery: GalleryType }) {
  const { urls } = gallery;
  return (
    <div className="w-full mb-12">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="col-span-2 md:col-span-3 row-span-2">
          <Image
            src={`https:${urls[0]}`}
            className="w-full h-auto"
            alt={urls[0]}
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
        <div className="col-span-1 row-span-2">
          <Image
            src={`https:${urls[1]}`}
            className="w-full h-auto"
            alt={urls[1]}
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
        <div className="col-span-1 row-span-1">
          <Image
            src={`https:${urls[2]}`}
            className="w-full h-auto"
            alt={urls[2]}
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
        <div className="col-span-1 row-span-1">
          <Image
            src={`https:${urls[3]}`}
            className="w-full h-auto"
            alt={urls[3]}
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
        <div className="col-span-1 row-span-1">
          <Image
            src={`https:${urls[4]}`}
            className="w-full h-auto"
            alt={urls[4]}
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
        <div className="col-span-1 row-span-1">
          <Image
            src={`https:${urls[5]}`}
            className="w-full h-auto"
            alt={urls[5]}
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
        <div className="col-span-1 row-span-1">
          <Image
            src={`https:${urls[6]}`}
            className="w-full h-auto"
            alt={urls[6]}
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
        <div className="col-span-1 row-span-1">
          <Image
            src={`https:${urls[7]}`}
            className="w-full h-auto"
            alt={urls[7]}
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>

        <div className="hidden md:block">
          <Image
            src={`https:${urls[8]}`}
            className="w-full h-auto"
            alt={urls[8]}
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
      </div>
    </div>
  );
}
