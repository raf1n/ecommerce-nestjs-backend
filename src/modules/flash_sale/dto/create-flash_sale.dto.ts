import { IsString } from "class-validator";

export class CreateFlashSaleDto {
  @IsString()
  product_slug: string;

  @IsString()
  status: string;
}
