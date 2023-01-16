import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop()
  fullName: string;

  // @Prop()
  // lastName: string;

  @Prop()
  avatar: string;

  @Prop({ required: true })
  email: string;


  @Prop({ required: true })
  userType: string;

  @Prop({ slug: "title", unique: true })
  slug: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
