import { IsString, IsInt } from "class-validator";

export class RegisterUserDto {
  @IsString({ message: "should be string" })
  firstName: string;
  @IsString({ message: "should be string" })
  userType: string;
  @IsString({ message: "should be string" })
  lastName: string;
  @IsString({ message: "should be string" })
  email: string;

  // @IsString({ message: 'should be string' })
  // password: string
}
