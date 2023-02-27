import { IsArray, IsNumber, IsString } from "class-validator";

export class CreateMegaMenuCategoryDto {
  @IsString()
  cat_name: string;

  @IsString()
  cat_slug: string;

  @IsNumber()
  serial: number;

  @IsArray()
  sub_cat_list: object[];

  @IsString()
  status: "active" | "inactive";
}
