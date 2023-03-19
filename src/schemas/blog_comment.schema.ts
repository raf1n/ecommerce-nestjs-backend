import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type BlogCommentDocument = BlogComment & Document;

@Schema({ timestamps: true })
export class BlogComment {
  @Prop({ required: true, unique: true })
  slug: string;

  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  userSlug: string;

  @Prop()
  avatar: string;

  @Prop()
  blogSlug: string;

  @Prop()
  comment: string;

  @Prop({ default: "active" })
  status: "active" | "inactive";
}

export const BlogCommentSchema = SchemaFactory.createForClass(BlogComment);
