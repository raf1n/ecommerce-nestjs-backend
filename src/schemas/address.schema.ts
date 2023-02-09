import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type AddressDocument = Address & Document;

@Schema({ timestamps: true })
export class Address {
  @Prop({ default: "address_slug_1", required: true })
  slug: string;

  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;

  @Prop()
  country: string;

  @Prop()
  state: string;

  @Prop()
  city: string;

  @Prop()
  address: string;
}

export const AddressSchema = SchemaFactory.createForClass(Address);
