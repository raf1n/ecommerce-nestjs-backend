import { Module } from "@nestjs/common";
import { WishlistService } from "./wishlist.service";
import { WishlistController } from "./wishlist.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { WishlistSchema } from "src/schemas/wishlist.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: WishlistService.name, schema: WishlistSchema },
    ]),
  ],
  controllers: [WishlistController],
  providers: [WishlistService],
})
export class WishlistModule {}
