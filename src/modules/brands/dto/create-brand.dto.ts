import { IsArray, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateBrandDto {
  // @IsNotEmpty({ message: "logo can not be empty"})
  @IsOptional()
  @IsString({ message: "logo should be string" })
  logo: string;

  @IsNotEmpty({ message: "name can not be empty" })
  @IsString({ message: "name should be string" })
  name: string;

  @IsNotEmpty({ message: "status can not be empty" })
  @IsString({ message: "status should be string" })
  status: string;
}
