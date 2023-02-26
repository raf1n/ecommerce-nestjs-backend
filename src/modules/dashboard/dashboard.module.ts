import { Module } from "@nestjs/common";
import { DashboardService } from "./dashboard.service";
import { DashboardController } from "./dashboard.controller";
import { UsersModule } from "../users/users.module";
import { ProductsModule } from "../products/products.module";
import { PopularCategoriesModule } from "../popular_categories/popular_categories.module";
import { WishlistModule } from "../wishlist/wishlist.module";
import { CartModule } from "../cart/cart.module";
import { CategoriesModule } from "../categories/categories.module";
import { SubCategoriesModule } from "../sub-categories/sub-categories.module";
import { ReviewsModule } from "../reviews/reviews.module";
import { BrandsModule } from "../brands/brands.module";
import { OrdersModule } from "../orders/orders.module";
import { PaymentsModule } from "../payments/payments.module";
import { ReporteditemsModule } from "../reporteditems/reporteditems.module";
import { AddressesModule } from "../addresses/addresses.module";
import { CouponModule } from "../coupon/coupon.module";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "src/schemas/user.schema";
import { Coupon, CouponSchema } from "src/schemas/coupon.schema";
import { Product, ProductSchema } from "src/schemas/product.schema";
import { Order, OrderSchema } from "src/schemas/order.schema";
import {
  PopularCategory,
  PopularCategorySchema,
} from "src/schemas/popular-category.schema";
import { Wishlist, WishlistSchema } from "src/schemas/wishlist.schema";
import { Category, CategorySchema } from "src/schemas/category.schema";
import { Review, ReviewSchema } from "src/schemas/review.schema";
import { Brand, BrandSchema } from "src/schemas/brand.schema";
import {
  ReportedItem,
  ReportedItemSchema,
} from "src/schemas/reported-item.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Coupon.name, schema: CouponSchema },
      { name: Product.name, schema: ProductSchema },
      { name: Order.name, schema: OrderSchema },
      { name: PopularCategory.name, schema: PopularCategorySchema },
      { name: Wishlist.name, schema: WishlistSchema },
      { name: Category.name, schema: CategorySchema },
      { name: Review.name, schema: ReviewSchema },
      { name: Brand.name, schema: BrandSchema },
      { name: ReportedItem.name, schema: ReportedItemSchema },
    ]),
  ],
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule {}
