import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type BrandDocument = Brand & Document;

@Schema({ timestamps: true })
export class Brand {
  @Prop({ default: "brand_slug_1" })
  slug: string;

  @Prop()
  logo: string;

  @Prop()
  name: string;

  @Prop()
  status: string;
}

export const BrandSchema = SchemaFactory.createForClass(Brand);
