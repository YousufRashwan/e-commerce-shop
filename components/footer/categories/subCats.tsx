import { getSubCatsByCatId } from "@/lib/data";

export default async function SubCats({ catId }: { catId: string }) {
  const subCats = await getSubCatsByCatId(catId);

  return (
    <ul>
      {subCats.map((subCat: any) => {
        const { subCategoriesTitle: title } = subCat.fields;
        return <li key={title}>{title}</li>;
      })}
    </ul>
  );
}
