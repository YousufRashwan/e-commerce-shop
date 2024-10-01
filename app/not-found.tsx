import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(calc(100vh)-150px)] bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mt-8">
        عفواً، لم يتم العثور على الصفحة
      </h1>
      <p className="text-lg text-gray-600 mt-4">
        لا يمكن العثور على الصفحة التي تبحث عنها. ربما يكون الرابط غير صحيح أو
        قد تمت إزالة الصفحة.
      </p>
      <Link
        href={"/"}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600"
      >
        العودة إلى الصفحة الرئيسية
      </Link>
    </div>
  );
}
