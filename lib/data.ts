import { createClient } from "contentful";

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY as string,
});

export async function getCats() {
  const { items: cats } = await client.getEntries({
    content_type: "productCategories",
  });

  return cats;
}

export async function getCatBySlug(slug: string) {
  const { items: cats } = await client.getEntries({
    content_type: "productCategories",
    "fields.categoryPageSlug": slug,
  });

  return cats[0];
}

export async function getSubCatsByCatId(id: string) {
  const { items: subCats } = await client.getEntries({
    content_type: "subCategoriesTitle",
    "fields.mainCategoryReference.sys.id": id,
  });

  return subCats;
}

export async function getSubSubCatsBySubCatId(id: string) {
  const { items: subSubCats } = await client.getEntries({
    content_type: "subCategories",
    "fields.subCategoryTitleReference.sys.id": id,
  });

  return subSubCats;
}

export async function getHomePageGalleries() {
  const { items: galleries } = await client.getEntries({
    content_type: "homePageGallery",
  });

  return galleries;
}

export async function getAdGallery() {
  const { items: galleries } = await client.getEntries({
    content_type: "carouselGallery",
  });

  return galleries[0];
}
