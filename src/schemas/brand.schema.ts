import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type BrandDocument = Brand & Document;

@Schema({ timestamps: true })
export class Brand {
  @Prop({ default: "brand_slug_1"})
  brand_slug: string;

  @Prop()
  logo_url: string;

  @Prop()
  name: string;

  @Prop()
  status: string;

  @Prop()
  cat_slug: Array<string>;

  @Prop()
  sub_cat_slug: Array<string>;
}

export const BrandSchema = SchemaFactory.createForClass(Brand);
