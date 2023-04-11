import { Query } from "@nestjs/common/decorators";
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { CartService } from "./cart.service";
import { CreateCartDto } from "./dto/create-cart.dto";
import { UpdateCartDto } from "./dto/update-cart.dto";
import { query } from "express";

@Controller("cart")
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  create(@Body() createCartDto: CreateCartDto) {
    return this.cartService.create(createCartDto);
  }

  @Get()
  findAll(@Query() query: { user_slug: string }) {
    return this.cartService.findAll(query);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.cartService.findOne(+id);
  }

  @Patch()
  update(
    @Query() query: { cart_slug: string },
    @Body() updateCartDto: UpdateCartDto
  ) {
    return this.cartService.update(query.cart_slug, updateCartDto);
  }

  @Delete()
  remove(@Query() query: { user_slug: string; product_slug: string }) {
    return this.cartService.remove(query.user_slug, query.product_slug);
  }

  @Delete("delete_all/:user_slug")
  deleteAll(@Param("user_slug") user_slug: string) {
    return this.cartService.deleteAll(user_slug);
  }
}
