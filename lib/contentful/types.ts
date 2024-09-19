import * as contentful from "contentful";

// Types used to handle Contenful API Fetch

// Common Fields Between Categories Types

interface CommonFields {
  title: contentful.EntryFieldTypes.Text;
  slug: contentful.EntryFieldTypes.Text;
  image: contentful.AssetLink;
}

// Category Type

export interface Cat extends CommonFields {
  contentTypeId: "productCategories";
  fields: CommonFields;
}

export type CatEntry = contentful.Entry<Cat, undefined, string>;

// Subcategory Type

interface SubCatFields extends CommonFields {
  catRef: contentful.EntryFieldTypes.EntryLink<Cat>;
}

export interface SubCat {
  contentTypeId: "subCategoriesTitle";
  fields: SubCatFields;
}

export type SubCatEntry = contentful.Entry<SubCat, undefined, string>;

// Sub-Subcategory Type

interface SubSubCatFields extends CommonFields {
  subCatRef: contentful.EntryFieldTypes.EntryLink<SubCat>;
}

export interface SubSubCat {
  contentTypeId: "subCategories";
  fields: SubSubCatFields;
}

export type SubSubCatEntry = contentful.Entry<SubSubCat, undefined, string>;

// Galleries Types

type Asset = {
  fields: {
    file: {
      url: string;
    };
  };
};

interface ImagesFields {
  fields: {
    images: Asset[];
  };
}

export interface HomePageGallery extends ImagesFields {
  contentTypeId: "homePageGallery";
}

export interface AdGallery extends ImagesFields {
  contentTypeId: "carouselGallery";
}

export interface GalleryEntry extends ImagesFields {
  sys: contentful.EntrySys;
}

// Products Type

interface Brand {
  contentTypeId: "brand";
  fields: {
    title: string;
  };
}

type BrandEntry = contentful.Entry<Brand, undefined, string>;

interface ProductFields extends CommonFields {
  price: contentful.EntryFieldTypes.Number;
  subSubCatRef: contentful.EntryFieldTypes.EntryLink<SubSubCat>;
  brand: BrandEntry;
  overview: contentful.EntryFieldTypes.Text[];
}

export interface Product {
  contentTypeId: "products";
  fields: ProductFields;
}

export type ProductEntry = contentful.Entry<Product, undefined, string>;
