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

  @Prop()
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
  @Prop({
    type: {
      shop_name: String,
      shop_address: String,
      shop_logo: String,
      shop_cover: String,
      opens_at: String,
      close_at: String,
      geetings_message: String,
      social_icon: String,
      social_link: String,
      seo_title: String,
      seo_des: String,
    },
  })
  shop: {
    type: {
      shop_name: string;
      shop_address: string;
      shop_logo: string;
      shop_cover: string;
      opens_at?: string;
      close_at?: string;
      geetings_message?: string;
      social_icon?: string;
      social_link?: string;
      seo_title?: string;
      seo_des?: string;
    };
  };
  @Prop()
  tokenType: string;

  @Prop()
  role: string;

  @Prop({ unique: true })
  slug: string;

  @Prop()
  status: string;

  @Prop()
  user_email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
