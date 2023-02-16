import { IsNumber, IsString } from "class-validator";

export class CreateReviewDto {
  @IsString()
  user_slug: string;

  @IsString()
  product_slug: string;

  @IsString()
  name: string;

  @IsString()
  message: string;

  @IsNumber()
  rating: number;
}
