import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type BlogDocument = Blog & Document;

@Schema({ timestamps: true })
export class Blog {
  @Prop()
  slug: string;

  @Prop()
  imageURL: string;

  @Prop()
  title: string;

  @Prop()
  category: string;

  @Prop()
  description: string;

  @Prop()
  isShowHomepage: string;

  @Prop()
  status: string;

  @Prop()
  seo_Title: string;

  @Prop()
  seo_Description: string;

  @Prop()
  postBy: string;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
