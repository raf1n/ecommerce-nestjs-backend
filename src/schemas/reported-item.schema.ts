import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ReportedItemDocument = ReportedItem & Document;

@Schema({ timestamps: true })
export class ReportedItem {
  @Prop()
  slug: string;

  @Prop()
  product_slug: string;

  @Prop()
  user_slug: string;

  @Prop()
  title: string;

  @Prop()
  note: string;
}

export const ReportedItemSchema = SchemaFactory.createForClass(ReportedItem);
