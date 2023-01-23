export class CreateProductDto {
  slug: string;
  id: string;
  productName: string;
  catSlug: string;
  subCatSlug: string;
  brandSlug: string;
  price: number;
  description: string;
  status: string;
  imageURL: Array<string>;
  discount: string;
  sellerSlug: string;
  stock: number;
  seoTitle: string;
  seoDescription: string;
}
