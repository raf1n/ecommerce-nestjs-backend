import { IsArray, IsOptional, IsString } from "class-validator"

export class CreateBrandDto {
  @IsString({ message: 'should be string' })
  logo_url: string;

  @IsString({ message: 'should be string' })
  name: string;

  @IsString({ message: 'should be string' })
  status: string;

  @IsArray({ message: 'should be array of string' })
  cat_slug: Array<string>;

  @IsArray({ message: 'should be array of string' })
  @IsOptional()
  sub_cat_slug: Array<string>;
}
