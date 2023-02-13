import { IsString } from "class-validator";

export class UpdateUserAddressDto {
  @IsString({ message: "should be string" })
  name: string;

  @IsString({ message: "should be string" })
  phone: string;

  @IsString({ message: "should be string" })
  country: string;

  @IsString({ message: "should be string" })
  state: string;

  @IsString({ message: "should be string" })
  city: string;

  @IsString({ message: "should be string" })
  address: string;
}
