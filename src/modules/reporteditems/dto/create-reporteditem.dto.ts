import { IsString } from "class-validator";
export class CreateReporteditemDto {
  @IsString()
  slug: string;

  @IsString()
  product_slug: string;

  @IsString()
  user_slug: string;

  @IsString()
  title: string;

  @IsString()
  note: string;
}
