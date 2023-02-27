import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type AdvertisementDocument = Advertisement & Document;

@Schema({ timestamps: true })
export class Advertisement {
  @Prop()
  slug: string;

  @Prop()
  adName: string;

  @Prop()
  adImage: string;

  @Prop()
  title: string;

  @Prop()
  title_one: string;

  @Prop()
  title_two: string;

  @Prop()
  badge: string;

  @Prop()
  category_link: string;

  @Prop()
  status: string;
}

export const AdvertisementSchema = SchemaFactory.createForClass(Advertisement);
