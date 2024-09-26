import NavLink from "@/components/categories/mobileNav/sidenavLink";

import { Suspense } from "react";

import { getCats } from "@/lib/contentful/data";

export default async function Sidenav() {
  const cats = await getCats();
  return (
    <nav className="w-1/4 h-full bg-gray-200 text-center overflow-y-scroll mb-4">
      <Suspense
        fallback={Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className={`text-sm p-4 px-2 border-b-[1px] border-gray-300 transition-colors`}
          >
            جارى التحميل...
          </div>
        ))}
      >
        {cats.map((cat) => {
          const { id, title, slug } = cat;
          return <NavLink key={id} {...{ title, slug }} />;
        })}
      </Suspense>
    </nav>
  );
}
