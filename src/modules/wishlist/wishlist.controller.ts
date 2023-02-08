import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
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
  findAll() {
    return this.wishlistService.findAll();
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
  @Delete(":slug")
  delete(@Param("slug") slug: string) {
    return this.wishlistService.delete(slug);
  }
}
