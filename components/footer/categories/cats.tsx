import SubCats from "@/components/footer/categories/subCats";

import { getCats } from "@/lib/contentful/data";

export default async function Cats() {
  const cats = await getCats();

  return (
    <div className="hidden lg:grid grid-cols-4 gap-10">
      {cats.map((cat) => {
        const { id, title } = cat;

        return (
          <div key={id} className="col-span-1">
            <h3 className="text-xl font-extrabold mb-2">{title}</h3>
            <ul className="text-base">
              <SubCats catId={id} />
            </ul>
          </div>
        );
      })}
    </div>
  );
}
