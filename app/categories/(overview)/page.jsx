import { redirect } from "next/navigation";
import { getCats } from "@/lib/contentful/data";

export default async function Router() {
  const cats = await getCats();
  const firstCatSlug = cats[0].fields.categoryPageSlug;
  redirect(`/categories/${firstCatSlug}`);
}
