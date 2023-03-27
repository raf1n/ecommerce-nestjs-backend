import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type FlashSaleDocument = FlashSale & Document;

@Schema({ timestamps: true })
export class FlashSale {
  @Prop()
  slug?: string;

  @Prop()
  name?: string;

  @Prop()
  product_slug?: string;

  @Prop()
  status?: string;

  @Prop()
  imageHome?: string;

  @Prop()
  imageFlash?: string;

  @Prop()
  time?: string;

  @Prop()
  title?: string;

  @Prop()
  offer?: string;

  @Prop()
  sale_status?: string;
}
export const FlashSaleSchema = SchemaFactory.createForClass(FlashSale);
