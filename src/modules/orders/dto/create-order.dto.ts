import { IsArray, IsObject, IsString } from "class-validator";

export class CreateOrderDto {
  @IsString()
  order_slug: string;

  @IsString()
  user_slug: string;

  @IsString()
  payment_method: string;

  @IsString()
  transaction_id: string;

  @IsString()
  delivery_status: string;

  @IsObject()
  address: {
    country: string;
    state: string;
    city: string;
    address: string;
  };

  @IsArray()
  product_list: Array<object>;
}
