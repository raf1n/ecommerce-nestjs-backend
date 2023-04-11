import { query } from "express";
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
import { WishlistService } from "./wishlist.service";
import { CreateWishlistDto } from "./dto/create-wishlist.dto";
import { UpdateWishlistDto } from "./dto/update-wishlist.dto";

@Controller("wishlist")
export class WishlistController {
  constructor(private readonly wishlistService: WishlistService) {}

  @Post()
  create(@Body() createWishlistDto: CreateWishlistDto) {
    return this.wishlistService.create(createWishlistDto);
  }

  @Get()
  findAll(@Query() query: { user_slug: string }) {
    return this.wishlistService.findAll(query.user_slug);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.wishlistService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateWishlistDto: UpdateWishlistDto
  ) {
    return this.wishlistService.update(+id, updateWishlistDto);
  }

  // @Delete(":id")
  // remove(@Param("id") id: string) {
  //   return this.wishlistService.delete(+id);
  // }
  // @Delete(":slug")
  // delete(@Param("slug") slug: string) {
  //   return this.productsService.delete(slug);
  // }
  @Delete()
  delete(@Query() query: { user_slug: string; product_slug: string }) {
    return this.wishlistService.delete(query.user_slug, query.product_slug);
  }
  @Delete("delete_all/:user_slug")
  deleteAll(@Param("user_slug") user_slug: string) {
    return this.wishlistService.deleteAll(user_slug);
  }
}
