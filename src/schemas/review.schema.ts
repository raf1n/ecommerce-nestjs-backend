// slug: string;
// buyer_slug: string;
// product_slug: string;
// review_description: string;
// rating: number;

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ReviewDocument = Review & Document;

@Schema()
export class Review {
  @Prop()
  slug: string;

  @Prop()
  buyer_slug: string;

  @Prop()
  product_slug: string;

  @Prop()
  review_description: string;

  @Prop()
  rating: number;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
