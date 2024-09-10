import Image from "next/image";

export default async function SubSubCat({ subSubCat }: any) {
  const { subCategoryName: name, subCategoryImage: image } = subSubCat.fields;
  const { url } = image.fields.file;
  return (
    <li>
      <div className="flex flex-col items-center">
        <div className="flex justify-center items-center w-[60px] h-[60px]">
          <Image
            src={`https:${url}`}
            alt="air conditioner"
            width="0"
            height="0"
            sizes="100vw"
            className="w-auto h-auto"
          />
        </div>
        <span className="text-[#666666]">{name}</span>
      </div>
    </li>
  );
}
