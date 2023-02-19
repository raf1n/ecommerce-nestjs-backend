import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type WishlistDocument = Wishlist & Document;

@Schema({ timestamps: true })
export class Wishlist {
  @Prop()
  wishlist_slug: string; //primary key

  @Prop()
  slug: string;

  @Prop()
  productName: string;

  @Prop()
  catSlug: string;

  @Prop()
  subCatSlug: string;

  @Prop()
  brandSlug: string;

  @Prop()
  price: number;

  @Prop()
  description: string;

  @Prop()
  status: string;

  @Prop()
  imageURL: Array<string>;

  @Prop()
  offerPrice: string;

  @Prop()
  weight: number;

  @Prop()
  stock: number;

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

  @Prop()
  user_slug: string;
}

export const WishlistSchema = SchemaFactory.createForClass(Wishlist);
