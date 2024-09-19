import { redirect } from "next/navigation";
import { getCats } from "@/lib/contentful/data";

export default async function Router() {
  const cats = await getCats();
  const { slug: firstCatSlug } = cats[0];
  redirect(`/categories/${firstCatSlug}`);
}
