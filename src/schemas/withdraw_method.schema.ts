import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type WithdrawMethodDocument = WithdrawMethod & Document;

@Schema({ timestamps: true })
export class WithdrawMethod {
  @Prop({ unique: true })
  slug: string;

  @Prop()
  name: string;

  @Prop()
  min: number;

  @Prop()
  max: number;

  @Prop()
  charge: number;

  @Prop({ default: "inactive"})
  status: string;

  @Prop()
  description: string;
}

export const WithdrawMethodSchema = SchemaFactory.createForClass(WithdrawMethod);