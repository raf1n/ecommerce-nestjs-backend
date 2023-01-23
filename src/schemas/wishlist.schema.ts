import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type WishlistDocument = Wishlist & Document;

@Schema({ timestamps: true })
export class Wishlist {
  @Prop()
  buyerSlug: string;

  @Prop()
  productSlug: Array<string>;

  @Prop()
  create_date: string;
}

export const WishlistSchema = SchemaFactory.createForClass(Wishlist);