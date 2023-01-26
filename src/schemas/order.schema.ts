import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type OrderDocument = Order & Document;

@Schema({ timestamps: true })
export class Order {
  @Prop({ required: true })
  slug: string;

  @Prop({ required: true })
  buyer_slug: string;

  @Prop({ required: true })
  product_list: Array<string>;

  @Prop({ required: true })
  billing_address: object;

  @Prop({ required: true })
  shipping_address: object;

  @Prop({ required: true })
  order_status: string;

  @Prop({ required: true })
  placement_date: string;

  @Prop({ required: true })
  checkout_discount: number;

  @Prop({ required: true })
  shipping_cost: number;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
