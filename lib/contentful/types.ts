import * as contentful from "contentful";

export type Cats = {
  contentTypeId: "productCategories";
  fields: {
    categoryPageName: contentful.EntryFieldTypes.Text;
    categoryPageSlug: contentful.EntryFieldTypes.Text;
    image: contentful.EntryFieldTypes.AssetLink;
  };
};

export type SubCats = {
  contentTypeId: "subCategoriesTitle";
  fields: {
    subCategoriesTitle: contentful.EntryFieldTypes.Text;
    mainCategoryReference: contentful.EntryFieldTypes.EntryLink<Cats>;
  };
};

export type SubCatsEntry = contentful.Entry<SubCats, undefined, string>;

export type SubSubCats = {
  contentTypeId: "subCategories";
  fields: {
    subCategoryName: contentful.EntryFieldTypes.Text;
    subCategoryImage: contentful.EntryFieldTypes.AssetLink;
    subCategoryTitleReference: contentful.EntryFieldTypes.EntryLink<SubCats>;
  };
};

export type SubSubCatEntry = contentful.Entry<SubSubCats, undefined, string>;

export type HomePageGalleries = {
  contentTypeId: "homePageGallery";
  fields: {
    galleryPhotos: contentful.EntryFieldTypes.Array<contentful.EntryFieldTypes.AssetLink>;
  };
};

export type AdGallery = {
  contentTypeId: "carouselGallery";
  fields: {
    carouselImages: contentful.EntryFieldTypes.Array<contentful.EntryFieldTypes.AssetLink>;
  };
};
