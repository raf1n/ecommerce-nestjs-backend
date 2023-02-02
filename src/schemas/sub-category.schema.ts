import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type SubCategoriesDocument = SubCategories & Document;

@Schema()
export class SubCategories {
  @Prop()
  slug: string;

  @Prop()
  cat_slug: string;

  // @Prop()
  // cat_name: string;

  @Prop()
  subcat_name: string;

  @Prop({ required: true })
  subcat_status: string;
}

export const SubCategoriesSchema = SchemaFactory.createForClass(SubCategories);
