import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { WishlistDocument } from "src/schemas/wishlist.schema";
import { CreateWishlistDto } from "./dto/create-wishlist.dto";
import { UpdateWishlistDto } from "./dto/update-wishlist.dto";

@Injectable()
export class WishlistService {
  constructor(
    @InjectModel(WishlistService.name)
    private readonly model: Model<WishlistDocument>
  ) {}
  create(createWishlistDto: CreateWishlistDto) {
    return "This action adds a new wishlist";
  }

  findAll() {
    return `This action returns all wishlist`;
  }

  findOne(id: number) {
    return `This action returns a #${id} wishlist`;
  }

  update(id: number, updateWishlistDto: UpdateWishlistDto) {
    return `This action updates a #${id} wishlist`;
  }

  remove(id: number) {
    return `This action removes a #${id} wishlist`;
  }
}
