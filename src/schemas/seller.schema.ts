import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type SellerDocument = Seller & Document;

@Schema({ timestamps: true })
export class Seller {
  @Prop({ required: true })
  slug: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  phone: number;

  @Prop({ required: true })
  shop_name: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  imageURL_logo: string;

  @Prop({ required: true })
  imageURL_cover: string;
}

export const SellerSchema = SchemaFactory.createForClass(Seller);
