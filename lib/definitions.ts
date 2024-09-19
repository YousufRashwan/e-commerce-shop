// Contenful Types simplified for used in the interface components

interface CommonFields {
  id: string;
  title: string;
  slug: string;
  url: string;
}

// Categories Types

export interface Cat extends CommonFields {}

export interface SubCat extends CommonFields {
  catId: string;
}

export interface SubSubCat extends CommonFields {
  subCatId: string;
}

// Photos Gallery Type

export interface Gallery {
  id: string;
  urls: string[];
}

// Product Type

export interface Product extends CommonFields {
  price: number;
  subSubCatId: string;
  brand: string;
  overview: string[];
  details: {
    width: number;
    height: number;
  };
}

export interface ProductPage {
  title: string;
  products: Product[];
}
