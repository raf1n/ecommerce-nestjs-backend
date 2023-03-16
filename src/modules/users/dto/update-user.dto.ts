import { PartialType } from "@nestjs/mapped-types";
import { RegisterUserDto } from "./register-user.dto";
import { LoginUserDto } from "./login-user.dto";
import { IsOptional, IsString } from "class-validator";

export class UpdateUserDto extends PartialType(LoginUserDto) {
    
  
}
