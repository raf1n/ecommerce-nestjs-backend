import { IsString } from "class-validator";

export class CreateSubscriberDto {
  @IsString()
  email: string;

  @IsString()
  verified?: boolean;

  @IsString()
  user_slug: string;
}
