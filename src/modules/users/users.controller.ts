import { SellerApplicationDto } from "./dto/seller-application.dto";
import { SearchSortDto } from "src/utils/all-queries.dto";
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
import { UpdateShopInfoDto } from "./dto/update-shop-info.dto";

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

  @Post("/seller_apply")
  async Seller_apply(@Body() sellerApplicationDto: SellerApplicationDto) {
    console.log("from con--", sellerApplicationDto.email);
    return await this.usersService.seller_apply(sellerApplicationDto);
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
  
  @Get("/sellers")
  findAllSellers(@Query() queries: SearchSortDto) {
    return this.usersService.findAllSellers(queries);
  }

  @Get(":email")
  findOne(@Param("email") email: string) {
    return this.usersService.findOne(email);
  }

  @Get(":slug")
  findUser(@Param("slug") slug: string) {
    return this.usersService.findSingleUser(slug);
  }

  @Patch("/edit-status/:slug")
  update(@Param("slug") slug: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(slug, updateUserDto);
  }

  @Patch("/shop/:email")
  updateShop(
    @Param("email") email: string,
    @Body() updateShopInfoDto: UpdateShopInfoDto
  ) {
    return this.usersService.updateShop(email, updateShopInfoDto);
  }

  @Patch("/profile/:email")
  updateProfile(
    @Param("email") email: string,
    @Body() updateShopInfoDto: UpdateShopInfoDto
  ) {
    return this.usersService.updateProfile(email, updateShopInfoDto);
  }

  @Get("/private/:slug")
  findSingleUser(@Param("slug") slug: string) {
    return this.usersService.findSingleUser(slug);
  }

  @Get("/sellerWithProducts/:slug")
  findUserWithProducts(@Param("slug") seller_slug: string) {
    return this.usersService.findUserWithProducts(seller_slug);
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
