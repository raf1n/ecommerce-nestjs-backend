import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CategoryDocument = Category & Document;

@Schema({ timestamps: true })
export class Category {
  @Prop({ required: true })
  cat_slug: string;

  @Prop({ required: true })
  cat_name: string;

  @Prop()
  cat_image: string;

  @Prop({ required: true })
  cat_status: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
