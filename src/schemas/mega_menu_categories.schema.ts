import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type MegaCategoriesDocument = MegaCategories & Document;

@Schema({ timestamps: true })
export class MegaCategories {
  @Prop({ required: true })
  slug: string;

  @Prop()
  cat_name: string;

  @Prop()
  cat_slug: string;

  @Prop()
  serial: number;

  @Prop()
  sub_cat_list: object[];

  @Prop()
  status: "active" | "inactive";
}

export const MegaCategoriesSchema = SchemaFactory.createForClass(MegaCategories);