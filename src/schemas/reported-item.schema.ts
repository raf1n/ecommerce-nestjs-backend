import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ReportedItemDocument = ReportedItem & Document;

@Schema({ timestamps: true })
export class ReportedItem {
  @Prop({ default: "slug_1" })
  slug: string;

  @Prop()
  product_slug: string;

  @Prop({ default: "user_slug_1" })
  user_slug: string;

  @Prop()
  title: string;

  @Prop()
  note: string;
}

export const ReportedItemSchema = SchemaFactory.createForClass(ReportedItem);