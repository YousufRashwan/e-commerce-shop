import { createClient } from "contentful";
import { notFound } from "next/navigation";

import NavLink from "@/components/categories/navLink";

export async function getLinks() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "productCategories" });
  const links = res.items.map((res) => {
    const link = {
      name: res.fields.categoryPageName,
      link: res.fields.categoryPageSlug,
    };
    return link;
  });

  if (!links.length) {
    notFound();
  }
  return links;
}

export default async function Sidenav() {
  const links = await getLinks();
  return (
    <nav className="w-1/4 h-full bg-gray-200 text-center overflow-y-scroll mb-4">
      {links.map((link) => {
        return <NavLink key={link.link} {...link} />;
      })}
    </nav>
  );
}
