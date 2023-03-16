import { IsOptional, IsString } from "class-validator";

export class CreateBlogDto {
  @IsString()
  imageURL: string;

  @IsString()
  title: string;

  @IsString()
  category: string;

  @IsString()
  description: string;

  @IsString()
  isShowHomepage: string;

  @IsString()
  status: string;

  @IsString()
  @IsOptional()
  seo_Title: string;

  @IsString()
  @IsOptional()
  seo_Description: string;

  @IsString()
  postBy: string;
}
