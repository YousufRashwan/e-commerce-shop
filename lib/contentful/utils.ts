import * as ContentfulTypes from "@/lib/contentful/types";
import { Cat, SubCat, SubSubCat, Gallery } from "@/lib/definitions";

// Functions to format fetched data from Contentful API for use in the UI components

// Categories Formatters

export function formattedCat(cat: ContentfulTypes.CatEntry): Cat {
  const {
    sys: { id },
    fields: {
      title,
      slug,
      image: {
        fields: {
          file: { url },
        },
      },
    },
  } = cat;
  const formattedCat = {
    id,
    title,
    slug,
    url,
  };
  return formattedCat;
}

export function formattedCats(cats: ContentfulTypes.CatEntry[]): Cat[] {
  return cats.map((cat) => formattedCat(cat));
}

export function formattedSubCat(subCat: ContentfulTypes.SubCatEntry): SubCat {
  const {
    sys: { id },
    fields: {
      title,
      slug,
      catRef: {
        sys: { id: catId },
      },
      image: {
        fields: {
          file: { url },
        },
      },
    },
  } = subCat;
  const formattedCat = {
    id,
    title,
    slug,
    catId,
    url,
  };
  return formattedCat;
}

export function formattedSubCats(
  subCats: ContentfulTypes.SubCatEntry[]
): SubCat[] {
  return subCats.map((subCat) => formattedSubCat(subCat));
}

export function formattedSubSubCat(
  subSubCat: ContentfulTypes.SubSubCatEntry
): SubSubCat {
  const {
    sys: { id },
    fields: {
      title,
      slug,
      subCatRef: {
        sys: { id: subCatId },
      },
      image: {
        fields: {
          file: { url },
        },
      },
    },
  } = subSubCat;
  const formattedSubSubCat = {
    id,
    title,
    slug,
    subCatId,
    url,
  };
  return formattedSubSubCat;
}

export function formattedSubSubCats(
  subSubCats: ContentfulTypes.SubSubCatEntry[]
): SubSubCat[] {
  return subSubCats.map((subSubCat) => formattedSubSubCat(subSubCat));
}

// Gallery Formatter

export function formattedGallery(
  gallery: ContentfulTypes.GalleryEntry
): Gallery {
  const {
    sys: { id },
    fields: { images },
  } = gallery;
  const formattedImages = images.map((image) => {
    const {
      fields: {
        title,
        file: { url },
      },
    } = image;
    return {
      url,
      title,
    };
  });
  const formattedHomePageGallery = {
    id,
    images: formattedImages,
  };
  return formattedHomePageGallery;
}

export function formattedGalleries(
  galleries: ContentfulTypes.GalleryEntry[]
): Gallery[] {
  return galleries.map((gallery) => formattedGallery(gallery));
}

// Products Formatters

export function formattedProduct(product: ContentfulTypes.ProductEntry) {
  const {
    sys: { id },
    fields: {
      title,
      slug,
      price,
      subSubCatRef: {
        sys: { id: subSubCatId },
      },
      image: {
        fields: {
          file: {
            url,
            details: {
              image: { width, height },
            },
          },
        },
      },
      brand: {
        fields: { title: brand },
      },
      overview,
    },
  } = product;
  const formattedProduct = {
    id,
    title,
    slug,
    price,
    subSubCatId,
    url,
    brand,
    overview,
    details: {
      width,
      height,
    },
  };
  return formattedProduct;
}

export function formattedProducts(products: ContentfulTypes.ProductEntry[]) {
  return products.map((product) => formattedProduct(product));
}

// Ads Data Formatters

export function formattedAd(ad: ContentfulTypes.AdEntry) {
  const {
    sys: { id },
    fields: {
      title,
      image: {
        fields: {
          file: { url },
        },
      },
      categoryReference: {
        fields: { slug },
      },
    },
  } = ad;
  const formattedAd = {
    id,
    title,
    url,
    slug,
  };
  return formattedAd;
}

export function formattedAds(ads: ContentfulTypes.AdEntry[]) {
  return ads.map((ad) => formattedAd(ad));
}
