import { IsString } from "class-validator";

export class CreateSubscriberDto {
  @IsString()
  email: string;
}
