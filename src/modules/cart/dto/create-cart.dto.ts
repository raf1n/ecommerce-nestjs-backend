import { IsNumber, IsString, Max, Min } from "class-validator";

export class CreateCartDto {
  @IsString()
  user_slug: string;

  @IsString()
  product_slug: string;

  @IsNumber()
  quantity: 1;
}
