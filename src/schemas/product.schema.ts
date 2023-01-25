import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ProductDocument = Product & Document;

@Schema({ timestamps: true })
export class Product {
  @Prop({ required: true })
  productName: string;

  @Prop({ required: true })
  catSlug: string;

  @Prop({ required: true })
  subCatSlug: string;

  @Prop({ required: true })
  brandSlug: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  status: string;

  @Prop({ required: true })
  imageURL: Array<string>;

  @Prop()
  offerPrice: number;

  // @Prop({ required: true })
  // sellerSlug: string;

  @Prop({ required: true })
  stock: number;

  @Prop({ required: true })
  weight: number;

  @Prop({ required: true })
  seoTitle: string;

  @Prop({ required: true })
  seoDescription: string;

  @Prop({ required: true })
  isTopProduct: boolean;

  @Prop({ required: true })
  isNewArrival: boolean;

  @Prop({ required: true })
  isBestProduct: boolean;

  @Prop({ required: true })
  isFeatured: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
