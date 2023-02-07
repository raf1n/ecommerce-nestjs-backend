import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { WishlistDocument, Wishlist } from "src/schemas/wishlist.schema";
import { CreateWishlistDto } from "./dto/create-wishlist.dto";
import { UpdateWishlistDto } from "./dto/update-wishlist.dto";

@Injectable()
export class WishlistService {
  constructor(
    @InjectModel(Wishlist.name)
    private readonly wishlistModel: Model<WishlistDocument>
  ) {}
  async create(createWishlistDto: CreateWishlistDto): Promise<Object> {
    const result = await new this.wishlistModel(createWishlistDto).save();

    if (result) {
      return {
        data: result,
        message: "success-wishlist",
      };
    } else {
      return {
        message: "error-wishlist",
      };
    }
  }

  async findAll(): Promise<Wishlist[]> {
    const wishlistData = await this.wishlistModel.find();
    return wishlistData;
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
