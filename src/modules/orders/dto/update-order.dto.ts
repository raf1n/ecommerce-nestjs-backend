import { IsString } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";
import { CreateOrderDto } from "./create-order.dto";

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
  @IsString()
  payment_status: string;
  
  @IsString()
  order_status: string;
}
