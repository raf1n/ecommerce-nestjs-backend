import { IsOptional, IsString } from "class-validator";

export class CreateBlogCategoryDto {
  @IsString()
  name: string;

  // @IsString()
  // @IsOptional()
  // slug: string;

  @IsString()
  status: string;
}
