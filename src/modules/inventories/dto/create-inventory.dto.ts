import { IsString, IsNumber } from "class-validator";

export class CreateInventoryDto {
  @IsString()
  product_slug: string;

  @IsNumber()
  quantity: number;

  @IsString()
  type: "stockIn" | "stockOut";
}
