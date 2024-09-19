import NavLink from "@/components/categories/mobileNav/sidenavLink";

import { getCats } from "@/lib/contentful/data";

export default async function Sidenav() {
  const cats = await getCats();
  return (
    <nav className="w-1/4 h-full bg-gray-200 text-center overflow-y-scroll mb-4">
      {cats.map((cat) => {
        const { id, title, slug } = cat;
        return <NavLink key={id} {...{ title, slug }} />;
      })}
    </nav>
  );
}
