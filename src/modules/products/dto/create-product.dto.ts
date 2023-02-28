import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  isBoolean,
} from "class-validator";

export class CreateProductDto {
  // id: string;
  @IsString()
  productName: string;

  @IsString()
  catSlug: string;

  @IsOptional()
  @IsString()
  subCatSlug: string;

  @IsOptional()
  @IsString()
  brandSlug: string;

  @IsNumber()
  price: number;

  @IsString()
  description: string;

  @IsString()
  status: string;

  @IsArray()
  imageURL: Array<string>;

  @IsOptional()
  offerPrice: number;

  // sellerSlug: string;

  @IsNumber()
  weight: number;

  @IsNumber()
  stock: number;

  @IsString()
  seoTitle: string;

  @IsString()
  seoDescription: string;

  @IsBoolean()
  isTopProduct: boolean;

  @IsBoolean()
  isNewArrival: boolean;

  @IsBoolean()
  isBestProduct: boolean;

  @IsBoolean()
  isFeatured: boolean;

  @IsBoolean()
  isPopular: boolean;

  @IsString()
  addedBy: string;
}
