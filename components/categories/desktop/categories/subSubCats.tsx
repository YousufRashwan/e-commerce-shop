import { getSubSubCatsBySubCatId } from "@/lib/data";

export default async function SubSubCat({ subCatId }: { subCatId: string }) {
  const subSubCats = await getSubSubCatsBySubCatId(subCatId);
  return (
    <ul>
      {subSubCats.map((subSubCat: any) => {
        const { subCategoryName: title } = subSubCat.fields;
        return <li key={title}>{title}</li>;
      })}
    </ul>
  );
}
