import { IsString } from "class-validator";

export class CreateSeoDto {
  slug: string;

  @IsString()
  topic: string;

  @IsString()
  seo_title: string;

  @IsString()
  seo_description: string;
}
