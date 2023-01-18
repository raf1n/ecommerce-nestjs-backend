import { IsInt, isNumber, IsNumber, IsString } from "class-validator"

export class LoginUserDto {

    @IsString({ message: 'should be string' })
    email: string

    @IsString({ message: 'should be string' })
    fullName: string

    @IsString({ message: 'should be string' })
    token: string

    @IsString({ message: 'should be string' })
    tokenType: "facebook" | "google" | "email"

    @IsString({ message: 'should be string' })
    avatar: string
    
    @IsString({ message: 'should be string' })
    userRole: string

    // @IsString({ message: 'should be string' })
    // userType: string
}