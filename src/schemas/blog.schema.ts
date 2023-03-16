import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type BlogDocument = Blog & Document;

// imageUrl:
// title:
// catSlug:
// description:
// isShowHomepage:
// status:
// seo_title:
// seo_description:
// postBy:

@Schema({ timestamps: true })
export class Blog {
  @Prop()
  slug: string;

  @Prop()
  imageURL: string;

  @Prop()
  title: string;

  @Prop()
  catSlug: string;

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

//admin_id//
//blog_category_id
//created_at
//description
//id
//image
//seo_description
//seo_title
//show_homepage
//slug
//status
//title
//updated_at
//views
