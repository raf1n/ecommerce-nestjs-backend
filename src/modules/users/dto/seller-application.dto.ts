import { IsNumber, IsObject, IsOptional, IsString } from "class-validator";

export class SellerApplicationDto {
  @IsString()
  @IsOptional()
  slug: string;

  @IsString()
  fullName: string;

  @IsString()
  avatar: string;

  @IsString()
  email: string;

  @IsString()
  user_email: string;

  @IsString()
  phone: string;

  @IsObject()
  shop: {
    shop_name: string;
    shop_address: string;
    shop_logo: string;
    shop_cover: string;
  };

  @IsString()
  status: string;

  @IsString()
  role: string;
}
