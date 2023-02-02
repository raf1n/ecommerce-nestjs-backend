import { IsArray, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateBrandDto {
  // @IsNotEmpty({ message: "logo can not be empty"})
  @IsOptional()
  @IsString({ message: 'logo should be string' })
  logo: string;

  @IsNotEmpty({ message: "name can not be empty"})
  @IsString({ message: 'name should be string' })
  name: string;

  @IsNotEmpty({ message: "status can not be empty"})
  @IsString({ message: 'status should be string' })
  status: string;

  @IsNotEmpty({ message: "cat_slug can not be empty"})
  @IsArray({ message: 'cat_slug should be array of string' })
  cat_slug: Array<string>;

  @IsArray({ message: 'sub_cat_slug should be array of string' })
  @IsOptional()
  sub_cat_slug: Array<string>;
}
