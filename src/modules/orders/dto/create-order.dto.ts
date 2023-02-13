import { IsArray, IsString } from "class-validator";

export class CreateOrderDto {
  @IsString()
  user_slug: string;

  @IsString()
  payment_method: string;

  @IsString()
  transaction_id: string;

  @IsArray()
  product_list: Array<object>;
}
