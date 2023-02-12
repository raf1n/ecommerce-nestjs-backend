import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type OrderDocument = Order & Document;

@Schema({ timestamps: true })
export class Order {
  @Prop()
  order_slug: string;

  @Prop()
  user_slug: string;

  @Prop()
  payment_method: string;

  @Prop()
  transaction_id: string;

  @Prop()
  product_list: Array<object>;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
