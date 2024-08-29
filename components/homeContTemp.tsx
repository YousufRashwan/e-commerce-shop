import { homeContent } from "@/app/lib/data";
import HomePageCategories from "./homePageCategories";

export default function HomeContTemp() {
  return (
    <>
      {homeContent.map((content) => (
        <HomePageCategories key={content.name} imageArray={content.images} />
      ))}
    </>
  );
}
