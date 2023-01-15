import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CartDocument = Cart & Document;

@Schema()
export class Cart {
  @Prop()
  slug: string;

  @Prop()
  product_slug: Array<string>;

  @Prop()
  quantity: number;

  @Prop()
  buyer_slug: string;

  @Prop()
  create_date: string;
}

export const CartSchema = SchemaFactory.createForClass(Cart);
