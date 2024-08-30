"use client";

import CategorySections from "@/components/categories/categorySections";

import { getCategorySectionsByPathname } from "@/app/lib/data";

import { usePathname } from "next/navigation";

export default function Hey() {
  const pathname = usePathname();
  const categorySections = getCategorySectionsByPathname(pathname);
  return (
    <div className="px-4">
      {categorySections ? (
        <CategorySections {...categorySections} />
      ) : (
        <div className="text-red-500 text-4xl m-4">الصفحة غير موجودة</div>
      )}
    </div>
  );
}
