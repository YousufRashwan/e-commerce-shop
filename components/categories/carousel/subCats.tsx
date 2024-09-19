import { getSubCats } from "@/lib/contentful/data";
import Carousel from "@/components/categories/carousel/carousel";

export default async function subCats() {
  const subCats = await getSubCats();
  return <Carousel subCats={subCats} />;
}
