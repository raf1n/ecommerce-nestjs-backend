import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type SeoDocument = Seo & Document;

@Schema()
export class Seo {
  @Prop()
  slug: string;

  @Prop()
  topic: string;

  @Prop()
  seo_title: string;

  @Prop()
  seo_description: string;
}

export const SeoSchema = SchemaFactory.createForClass(Seo);
