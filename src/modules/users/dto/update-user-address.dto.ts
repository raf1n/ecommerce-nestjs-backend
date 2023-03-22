import { IsString, MaxLength } from "class-validator";

export class UpdateUserAddressDto {
  @IsString({ message: "should be string" })
  @MaxLength(50)
  name: string;

  @IsString()
  avatar: string;

  @IsString({ message: "should be string" })
  @MaxLength(50)
  phone: string;

  @IsString({ message: "should be string" })
  @MaxLength(50)
  country: string;

  @IsString({ message: "should be string" })
  @MaxLength(50)
  state: string;

  @IsString({ message: "should be string" })
  @MaxLength(50)
  city: string;

  @IsString({ message: "should be string" })
  @MaxLength(200)
  address: string;
}
