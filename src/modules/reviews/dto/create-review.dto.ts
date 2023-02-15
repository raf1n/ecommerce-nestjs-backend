import { IsString } from "class-validator";

export class CreateReviewDto {
  @IsString()
  buyer_slug: string;

  @IsString()
  product_slug: string;

  @IsString()
  review_description: string;

  @IsString()
  rating: number;
}
