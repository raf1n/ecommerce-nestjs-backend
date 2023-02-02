import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ProductDocument = Product & Document;

@Schema({ timestamps: true })
export class Product {
  @Prop({ required: true, default: "product_slug_1" })
  slug: string;

  @Prop({ required: true })
  productName: string;

  @Prop({ required: true })
  catSlug: string;

  @Prop()
  subCatSlug: string;

  @Prop()
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

  @Prop({ required: true })
  stock: number;

  @Prop({ required: true })
  weight: number;

  @Prop()
  seoTitle: string;

  @Prop()
  seoDescription: string;

  @Prop()
  isTopProduct: boolean;

  @Prop()
  isNewArrival: boolean;

  @Prop()
  isBestProduct: boolean;

  @Prop()
  isFeatured: boolean;

  @Prop()
  isPopular: boolean;

  @Prop()
  addedBy: string;

  @Prop({ default: "pending" })
  approvalStatus: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
