import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type PaymentDocument = Payment & Document;

@Schema({ timestamps: true })
export class Payment {
  @Prop()
  order_slug: string;

  @Prop()
  user_slug: string;

  @Prop()
  payment_method: string;

  @Prop()
  transaction_id: string;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
