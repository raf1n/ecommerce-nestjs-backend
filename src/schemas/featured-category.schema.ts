import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type FeaturedCategoryDocument = FeaturedCategory & Document;

@Schema({ timestamps: true })
export class FeaturedCategory {
  @Prop()
  slug: string;

  @Prop({ required: true })
  cat_name: string;

  @Prop({ required: true })
  cat_slug: string;

  @Prop()
  image: string;
}

export const FeaturedCategorySchema =
  SchemaFactory.createForClass(FeaturedCategory);
