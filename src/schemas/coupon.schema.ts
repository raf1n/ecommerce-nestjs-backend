import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CouponDocument = Coupon & Document;

@Schema({ timestamps: true })
export class Coupon {
  @Prop()
  slug: string;

  @Prop()
  name: string;

  @Prop()
  code: string;

  @Prop()
  discount: number;

  @Prop()
  items_number: number;

  @Prop({ default: 2 })
  apply_qty: number;

  @Prop()
  expired_date: string;

  @Prop()
  status: string;

  @Prop()
  minimum_purchase: number;
}

export const CouponSchema = SchemaFactory.createForClass(Coupon);
