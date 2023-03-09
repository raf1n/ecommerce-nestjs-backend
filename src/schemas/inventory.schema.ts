import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type InventoryDocument = Inventory & Document;

@Schema({ timestamps: true })
export class Inventory {
  @Prop()
  slug: string;

  @Prop()
  product_slug: string;

  @Prop()
  quantity: number;

  @Prop()
  type: "stockIn" | "stockOut";
}

export const InventorySchema = SchemaFactory.createForClass(Inventory);
