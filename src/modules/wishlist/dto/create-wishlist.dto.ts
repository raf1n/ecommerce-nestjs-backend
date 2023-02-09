import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";

export class CreateWishlistDto {
  @IsString()
  slug: string;

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
  offerPrice: string;

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
  @IsOptional()
  addedBy: string;

  @IsString()
  @IsOptional()
  user_slug: string;
}
