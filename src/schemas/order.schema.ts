import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type OrderDocument = Order & Document;

@Schema({ timestamps: true })
export class Order {
  @Prop()
  subTotal: number;

  @Prop()
  discount: number;

  @Prop()
  shippingCost: number;

  @Prop()
  total: number;

  @Prop()
  slug: string;

  @Prop()
  user_slug: string;

  @Prop()
  payment_method: string;

  @Prop()
  transaction_id: string;

  @Prop({ default: "pending" })
  order_status: string;

  @Prop({ default: "pending" })
  payment_status: string;

  @Prop({
    type: {
      country: String,
      state: String,
      city: String,
      address: String,
    },
  })
  address: {
    type: {
      country: string;
      state: string;
      city: string;
      address: string;
    };
  };

  @Prop()
  product_list: Array<object>;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
