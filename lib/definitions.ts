// Contenful Types simplified for used in the interface components

interface CommonFields {
  id: string;
  title: string;
  slug: string;
  url: string;
}

// Categories Data Types

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
  images: {
    url: string;
    title: string;
  }[];
}

// Product Data Type

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

// Order Data Types

export interface OrderFormData {
  phoneNumber: string;
  email: string;
  name: string;
}

export interface Ad {
  id: string;
  title: string;
  url: string;
  slug: string;
}
