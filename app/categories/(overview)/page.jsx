import { redirect } from "next/navigation";
import { createClient } from "contentful";

export async function getFirstLink() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const { items } = await client.getEntries({
    content_type: "productCategories",
  });
  const link = items[0].fields.categoryPageSlug;
  return link;
}

export default async function Router() {
  const link = await getFirstLink();
  redirect(`/categories/${link}`);
}
