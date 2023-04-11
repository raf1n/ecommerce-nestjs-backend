import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type SliderDocument = Slider & Document;

@Schema()
export class Slider {
  @Prop()
  slug: string;

  @Prop()
  image: string;

  @Prop()
  badge: string;

  @Prop()
  titleOne: string;

  @Prop()
  titleTWo: string;

  @Prop()
  productLink: string;

  @Prop()
  serial: number;

  @Prop()
  status: string;
}

export const SliderSchema = SchemaFactory.createForClass(Slider);
