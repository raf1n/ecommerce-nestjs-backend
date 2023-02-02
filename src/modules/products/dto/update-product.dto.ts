import { PartialType } from "@nestjs/mapped-types";
import { CreateProductDto } from "./create-product.dto";
import { IsOptional, IsString } from "class-validator";

export class UpdateProductDto extends PartialType(CreateProductDto) {
  //   @IsString()
  //   slug: string;
  @IsString()
  @IsOptional()
  approvalStatus: string;
}
