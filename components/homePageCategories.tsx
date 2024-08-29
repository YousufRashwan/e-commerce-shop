import Image from "next/image";

export default function HomePageCategories({
  imageArray,
}: {
  imageArray: { src: string; alt: string }[];
}) {
  return (
    <div className="w-full mb-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="col-span-2 md:col-span-3 row-span-2">
          <Image
            src={imageArray[0].src}
            className="w-full h-auto"
            alt={imageArray[0].alt}
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
        <div className="col-span-1 row-span-2">
          <Image
            src={imageArray[1].src}
            className="w-full h-auto"
            alt={imageArray[1].alt}
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
        <div className="col-span-1 row-span-1">
          <Image
            src={imageArray[2].src}
            className="w-full h-auto"
            alt={imageArray[2].alt}
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
        <div className="col-span-1 row-span-1">
          <Image
            src={imageArray[3].src}
            className="w-full h-auto"
            alt={imageArray[3].alt}
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
        <div className="col-span-1 row-span-1">
          <Image
            src={imageArray[4].src}
            className="w-full h-auto"
            alt={imageArray[4].alt}
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
        <div className="col-span-1 row-span-1">
          <Image
            src={imageArray[5].src}
            className="w-full h-auto"
            alt={imageArray[5].alt}
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
        <div className="col-span-1 row-span-1">
          <Image
            src={imageArray[6].src}
            className="w-full h-auto"
            alt={imageArray[6].alt}
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
        <div className="col-span-1 row-span-1">
          <Image
            src={imageArray[7].src}
            className="w-full h-auto"
            alt={imageArray[7].alt}
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
      </div>
    </div>
  );
}
