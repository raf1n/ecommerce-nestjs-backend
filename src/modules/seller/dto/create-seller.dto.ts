import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateSellerDto {
  @IsString()
  email: string;

  @IsString()
  user_slug: string;

  @IsNumber()
  phone: number;

  @IsString()
  shop_name: string;

  @IsString()
  address: string;

  @IsString()
  status: string;

  @IsString()
  logo: string;

  @IsString()
  cover: string;
}
