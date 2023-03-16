import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type BlogCategoryDocument = BlogCategory & Document;

@Schema({ timestamps: true })
export class BlogCategory {
  @Prop()
  name: string;

  @Prop()
  slug: string;

  @Prop()
  status: string;
}

export const BlogCategorySchema = SchemaFactory.createForClass(BlogCategory);
