import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type BrandDocument = Brand & Document;

@Schema()
export class Brand {
  @Prop()
  slug: string;

  @Prop()
  cat_slug: Array<string>;

  @Prop()
  subcat_slug: Array<string>;
}

export const BrandSchema = SchemaFactory.createForClass(Brand);
