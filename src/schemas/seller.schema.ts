import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type SellerDocument = Seller & Document;

@Schema({ timestamps: true })
export class Seller {
  @Prop()
  slug: string;

  @Prop()
  user_slug: string;

  @Prop()
  email: string;

  @Prop()
  phone: number;

  @Prop()
  shop_name: string;

  @Prop()
  address: string;

  @Prop()
  status: string;

  @Prop()
  logo: string;

  @Prop()
  cover: string;
}

export const SellerSchema = SchemaFactory.createForClass(Seller);
