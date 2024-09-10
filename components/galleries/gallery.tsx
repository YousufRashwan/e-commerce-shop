import Image from "next/image";

export default function Gallery({ photos }: any) {
  return (
    <div className="w-full mb-12">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="col-span-2 md:col-span-3 row-span-2">
          <Image
            src={`https:${photos[0].fields.file.url}`}
            className="w-full h-auto"
            alt={photos[0].fields.title}
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
        <div className="col-span-1 row-span-2">
          <Image
            src={`https:${photos[1].fields.file.url}`}
            className="w-full h-auto"
            alt={photos[1].fields.title}
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
        <div className="col-span-1 row-span-1">
          <Image
            src={`https:${photos[2].fields.file.url}`}
            className="w-full h-auto"
            alt={photos[2].fields.title}
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
        <div className="col-span-1 row-span-1">
          <Image
            src={`https:${photos[3].fields.file.url}`}
            className="w-full h-auto"
            alt={photos[3].fields.title}
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
        <div className="col-span-1 row-span-1">
          <Image
            src={`https:${photos[4].fields.file.url}`}
            className="w-full h-auto"
            alt={photos[4].fields.title}
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
        <div className="col-span-1 row-span-1">
          <Image
            src={`https:${photos[5].fields.file.url}`}
            className="w-full h-auto"
            alt={photos[5].fields.title}
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
        <div className="col-span-1 row-span-1">
          <Image
            src={`https:${photos[6].fields.file.url}`}
            className="w-full h-auto"
            alt={photos[6].fields.title}
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
        <div className="col-span-1 row-span-1">
          <Image
            src={`https:${photos[7].fields.file.url}`}
            className="w-full h-auto"
            alt={photos[7].fields.title}
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>

        <div className="hidden md:block">
          <Image
            src={`https:${photos[8].fields.file.url}`}
            className="w-full h-auto"
            alt={photos[8].fields.title}
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
      </div>
    </div>
  );
}
