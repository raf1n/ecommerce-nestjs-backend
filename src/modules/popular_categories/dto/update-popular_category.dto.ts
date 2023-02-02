import { PartialType } from "@nestjs/mapped-types";
import { CreatePopularCategoryDto } from "./create-popular_category.dto";

export class UpdatePopularCategoryDto extends PartialType(
  CreatePopularCategoryDto
) {}
