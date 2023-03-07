import { SearchSortDto } from 'src/utils/all-queries.dto';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { RegisterUserDto } from "./dto/register-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { LoginUserDto } from "./dto/login-user.dto";
import { UpdateUserAddressDto } from "./dto/update-user-address.dto";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post("/sign_up")
  async register(@Body() registerUserDto: RegisterUserDto) {
    console.log("hello", registerUserDto);
    return await this.usersService.register(registerUserDto);
  }

  @Post("/login")
  async Login(@Body() loginUserDto: LoginUserDto) {
    console.log("hello1234", loginUserDto);
    return await this.usersService.login(loginUserDto);
  }

  @Patch("/update-profile-info")
  async updateAddress(
    @Query() query: { email: string },
    @Body() updateUserAddressDto: UpdateUserAddressDto
  ) {
    return await this.usersService.updateAddress(
      query.email,
      updateUserAddressDto
    );
  }

  @Get("/customers")
  findAllCustomers(@Query() queries: SearchSortDto) {
    return this.usersService.findAllCustomers(queries);
  }

  @Get(":email")
  findOne(@Param("email") email: string) {
    return this.usersService.findOne(email);
  }

  @Patch("/edit-status/:slug")
  update(@Param("slug") slug: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(slug, updateUserDto);
  }

  @Get("/private/:slug")
  findSingleUser(@Param("slug") slug: string) {
    return this.usersService.findSingleUser(slug);
  }

  // @Patch(":id")
  // update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  @Delete(":slug")
  delete(@Param("slug") slug: string) {
    return this.usersService.delete(slug);
  }
}
