import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type WithdrawDocument = Withdraw & Document;

@Schema({ timestamps: true })
export class Withdraw {
  @Prop({ unique: true })
  slug: string;

  @Prop()
  seller_slug: string;

  @Prop()
  method?: string;

  @Prop()
  amount?: number;

  @Prop()
  information?: string;
}

export const WithdrawSchema = SchemaFactory.createForClass(Withdraw);
