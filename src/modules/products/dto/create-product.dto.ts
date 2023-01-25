import { IsOptional, IsString } from "class-validator";

export class CreateProductDto {
  // id: string;
  @IsString()
  productName: string;

  @IsOptional()
  catSlug: string;

  @IsOptional()
  subCatSlug: string;

  @IsOptional()
  brandSlug: string;
  price: number;
  description: string;
  status: string;
  imageURL: Array<string>;

  @IsOptional()
  offerPrice: string;
  // sellerSlug: string;
  weight: number;
  stock: number;
  seoTitle: string;
  seoDescription: string;
  isTopProduct: boolean;
  isNewArrival: boolean;
  isBestProduct: boolean;
  isFeatured: boolean;
}
