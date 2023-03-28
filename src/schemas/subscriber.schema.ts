import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type SubscriberDocument = Subscriber & Document;

@Schema({ timestamps: true })
export class Subscriber {
  @Prop()
  slug: string;

  @Prop()
  email: string;

  @Prop()
  user_slug: string;
}

export const SubscriberSchema = SchemaFactory.createForClass(Subscriber);
