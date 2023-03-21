import { IsNumber, Max, Min } from "class-validator";

export class UpdateCartDto {
  @IsNumber()
  quantity: 1;
}
