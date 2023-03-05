import { IsOptional, IsString } from "class-validator";

export class CreateAdvertisementDto {
  @IsOptional()
  adName: string;

  @IsOptional()
  @IsString()
  adImage: string;

  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  title_one: string;

  @IsOptional()
  @IsString()
  title_two: string;

  @IsOptional()
  @IsString()
  badge: string;

  @IsOptional()
  @IsString()
  category_link: string;

  @IsOptional()
  @IsString()
  status: string;
}
