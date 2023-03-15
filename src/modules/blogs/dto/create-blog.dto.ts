import { IsOptional, IsString } from "class-validator";

// imageUrl:
// title:
// catSlug:
// description:
// isShowHomepage:
// status:
// seo_title:
// seo_description:
// postBy:
export class CreateBlogDto {
  @IsString()
  imageURL: string;

  @IsString()
  title: string;

  @IsString()
  catSlug: string;

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
