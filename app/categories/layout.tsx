import Sidenav from "@/components/categories/sidenav";

export default function CategoriesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-[calc(calc(100vh)-150px)]">
      <Sidenav />
      <div className="w-3/4 overflow-y-scroll mb-4">{children}</div>
    </div>
  );
}
