import SubCats from "@/components/footer/categories/subCats";

import { getCats } from "@/lib/data";

export default async function Cats() {
  const cats = await getCats();
  return (
    <div className="hidden lg:grid grid-cols-4 gap-10">
      {cats.map((subCat: any) => {
        const { categoryPageName: title } = subCat.fields;
        const { id } = subCat.sys;
        return (
          <div key={title} className="col-span-1">
            <h3 className="text-xl font-extrabold mb-2">{title}</h3>
            <ul className="text-base">
              <SubCats key={title} catId={id} />
            </ul>
          </div>
        );
      })}
    </div>
  );
}
