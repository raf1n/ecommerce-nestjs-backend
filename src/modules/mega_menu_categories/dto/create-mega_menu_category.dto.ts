import { IsArray, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateMegaMenuCategoryDto {
  @IsString()
  @IsOptional()
  slug: string;

  @IsString()
  cat_name: string;

  @IsString()
  cat_slug: string;

  @IsNumber()
  serial: number;

  @IsArray()
  sub_cat_list: Array<{ label: string; value: string }>;

  @IsString()
  status: "active" | "inactive";
}
