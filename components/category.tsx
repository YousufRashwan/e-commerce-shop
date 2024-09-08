import Image from "next/image";

const Category = ({ src, name }: { src: string; name: string }) => {
  return (
    <div className="w-[90px] lg:w-[130px] flex flex-col items-center">
      <div className="w-full h-[90px] lg:h-[130px] flex justify-center items-center bg-red-500 rounded-full">
        <Image
          width="0"
          height="0"
          sizes="100vw"
          alt="category"
          src={`/categoryCarousel/${src}`}
          className="w-2/3 h-auto"
        />
      </div>
      <p className="font-semibold text-sm">{name}</p>
    </div>
  );
};

export default Category;
