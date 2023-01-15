import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ReviewDocument = Review & Document;

@Schema({ timestamps: true })
export class Review {
  @Prop({ required: true })
  slug: string;

  @Prop({ required: true })
  buyer_slug: string;

  @Prop({ required: true })
  product_slug: string;

  @Prop({ required: true })
  review_description: string;

  @Prop({ required: true })
  rating: number;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
