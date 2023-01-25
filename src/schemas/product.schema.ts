import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ProductDocument = Product & Document;

@Schema({ timestamps: true })
export class Product {
  @Prop({ required: true })
  productName: string;

  @Prop({ required: true, default: "category_slug_1" })
  catSlug: string;

  @Prop({ required: true, default: "sub_category_slug_1" })
  subCatSlug: string;

  @Prop({ required: true, default: "brand_1" })
  brandSlug: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  status: string;

  @Prop({ required: true })
  imageURL: Array<string>;

  @Prop({ required: true })
  discount: string;

  @Prop({ required: true })
  sellerSlug: string;

  @Prop({ required: true })
  stock: number;

  @Prop({ required: true })
  seoTitle: string;

  @Prop({ required: true })
  seoDescription: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
