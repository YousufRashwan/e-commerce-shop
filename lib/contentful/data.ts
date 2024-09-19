import { createClient } from "contentful";

import * as ContentfulTypes from "@/lib/contentful/types";

import * as utils from "@/lib/contentful/utils";

import {
  Cat,
  SubCat,
  SubSubCat,
  Gallery,
  Product,
  ProductPage,
} from "@/lib/definitions";

// Data fetch calls from Contentful API

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY as string,
});

export async function getCats(): Promise<Cat[]> {
  const { items: cats } = await client.getEntries<ContentfulTypes.Cat>({
    content_type: "productCategories",
  });
  return cats ? utils.formattedCats(cats) : cats;
}

export async function getCatBySlug(slug: string): Promise<Cat> {
  const { items: cats } = await client.getEntries<ContentfulTypes.Cat>({
    content_type: "productCategories",
    "fields.slug": slug,
  });
  return cats[0] ? utils.formattedCat(cats[0]) : cats[0];
}

export async function getSubCats(): Promise<SubCat[]> {
  const { items: subCats } = await client.getEntries<ContentfulTypes.SubCat>({
    content_type: "subCategoriesTitle",
  });

  return subCats ? utils.formattedSubCats(subCats) : subCats;
}

export async function getSubCatBySlug(slug: string): Promise<SubCat> {
  const { items: subCats } = await client.getEntries<ContentfulTypes.SubCat>({
    content_type: "subCategoriesTitle",
    "fields.slug": slug,
  });

  return subCats[0] ? utils.formattedSubCat(subCats[0]) : subCats[0];
}

export async function getSubCatsByCatId(id: string): Promise<SubCat[]> {
  const { items: subCats } = await client.getEntries<ContentfulTypes.SubCat>({
    content_type: "subCategoriesTitle",
    "fields.catRef.sys.id": id,
  });

  return subCats ? utils.formattedSubCats(subCats) : subCats;
}

export async function getSubSubCatBySlug(slug: string): Promise<SubSubCat> {
  const { items: subSubCats } =
    await client.getEntries<ContentfulTypes.SubSubCat>({
      content_type: "subCategories",
      "fields.slug": slug,
    });

  return subSubCats[0]
    ? utils.formattedSubSubCat(subSubCats[0])
    : subSubCats[0];
}

export async function getSubSubCatsBySubCatId(
  id: string
): Promise<SubSubCat[]> {
  const { items: subSubCats } =
    await client.getEntries<ContentfulTypes.SubSubCat>({
      content_type: "subCategories",
      "fields.subCatRef.sys.id": id,
    });

  return subSubCats ? utils.formattedSubSubCats(subSubCats) : subSubCats;
}

export async function getHomePageGalleries(): Promise<Gallery[]> {
  const { items: galleries } =
    await client.getEntries<ContentfulTypes.HomePageGallery>({
      content_type: "homePageGallery",
    });
  return galleries ? utils.formattedGalleries(galleries) : galleries;
}

export async function getAdGallery(): Promise<Gallery> {
  const { items: galleries } =
    await client.getEntries<ContentfulTypes.AdGallery>({
      content_type: "carouselGallery",
    });
  return galleries[0] ? utils.formattedGallery(galleries[0]) : galleries[0];
}

// Products Data

export async function getProductsBySubSubCatId(id: string): Promise<Product[]> {
  const { items: products } = await client.getEntries<ContentfulTypes.Product>({
    content_type: "products",
    "fields.subSubCatRef.sys.id": id,
  });

  return products ? utils.formattedProducts(products) : products;
}

export async function getProductsBySubCatId(id: string): Promise<Product[]> {
  const subSubCats = await getSubSubCatsBySubCatId(id);
  const allProducts: Product[] = [];
  await Promise.all(
    subSubCats.map(async (ssc) => {
      const { id: sscId } = ssc;
      const products = await getProductsBySubSubCatId(sscId);
      products.map((product) => {
        allProducts.push(product);
      });
    })
  );
  return allProducts;
}

export async function getProductsByCatId(id: string): Promise<Product[]> {
  const subCats = await getSubCatsByCatId(id);
  const allProducts: Product[] = [];
  await Promise.all(
    subCats.map(async (subCat) => {
      const { id: subCatId } = subCat;
      const products = await getProductsBySubCatId(subCatId);
      products.map((product) => {
        allProducts.push(product);
      });
    })
  );
  return allProducts;
}

export async function getProductsBySlug(
  slug: string
): Promise<ProductPage | undefined> {
  const cat = await getCatBySlug(slug);
  if (cat) {
    const products = await getProductsByCatId(cat.id);
    return {
      title: cat.title,
      products: products,
    };
  }

  const subCat = await getSubCatBySlug(slug);
  if (subCat) {
    const products = await getProductsBySubCatId(subCat.id);
    return {
      title: subCat.title,
      products: products,
    };
  }

  const subSubCat: any = await getSubSubCatBySlug(slug);
  if (subSubCat) {
    const products = await getProductsBySubSubCatId(subSubCat.id);
    return {
      title: subSubCat.title,
      products: products,
    };
  }

  return undefined;
}

export async function getProductBySlug(slug: string): Promise<Product> {
  const { items: products } = await client.getEntries<ContentfulTypes.Product>({
    content_type: "products",
    "fields.slug": slug,
  });

  return products[0] ? utils.formattedProduct(products[0]) : products[0];
}
