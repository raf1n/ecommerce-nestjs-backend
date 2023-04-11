import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CartDocument = Cart & Document;

@Schema()
export class Cart {
  @Prop()
  slug: string;

  @Prop()
  user_slug: string;

  @Prop()
  product_slug: string;

  @Prop()
  quantity: number;
}

export const CartSchema = SchemaFactory.createForClass(Cart);
