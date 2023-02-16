import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document;

export type UserAddress = {
  country: string;
  state: string;
  city: string;
  address: string;
};

@Schema({ timestamps: true })
export class User {
  @Prop()
  fullName: string;

  @Prop()
  phone: string;

  @Prop()
  googleFullName: string;

  @Prop()
  avatar: string;

  @Prop({ required: true })
  email: string;

  @Prop({
    type: {
      country: String,
      state: String,
      city: String,
      address: String,
    },
  })
  address: {
    type: {
      country: String;
      state: String;
      city: String;
      address: String;
    };
  };

  @Prop({ required: true })
  tokenType: string;

  @Prop({ required: true })
  role: string;

  @Prop({ slug: "title", unique: true })
  slug: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
