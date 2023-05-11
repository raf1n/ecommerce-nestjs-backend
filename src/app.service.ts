import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Category, CategoryDocument } from "./schemas/category.schema";
import { Model } from "mongoose";
import { Brand, BrandDocument } from "./schemas/brand.schema";
import {
  SubCategories,
  SubCategoriesDocument,
} from "./schemas/sub-category.schema";
import { Cart, CartDocument } from "./schemas/cart.schema";
import { Wishlist, WishlistDocument } from "./schemas/wishlist.schema";
import { User, UserDocument } from "./schemas/user.schema";

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Category.name)
    private readonly categoryModel: Model<CategoryDocument>,
    @InjectModel(Brand.name)
    private readonly brandModel: Model<BrandDocument>,
    @InjectModel(SubCategories.name)
    private readonly subCategoryModel: Model<SubCategoriesDocument>,
    @InjectModel(Cart.name)
    private readonly cartModel: Model<CartDocument>,
    @InjectModel(Wishlist.name)
    private readonly wishlistModel: Model<WishlistDocument>,
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>
  ) {}

  getHello(): string {
    return "Hello World!";
  }

  getCats = new Promise((resolve, reject) => {
    const c1 = async () => {
      const categories = await this.categoryModel.find({
        cat_status: "active",
      });
      resolve(categories);
    };
    c1();
  });

  getBrands = new Promise((resolve, reject) => {
    const c1 = async () => {
      const brands = await this.brandModel.find({ status: "active" });
      resolve(brands);
    };
    c1();
  });

  getSubCats = new Promise((resolve, reject) => {
    const c1 = async () => {
      const subCats = await this.subCategoryModel.find({
        subcat_status: "active",
      });
      resolve(subCats);
    };
    c1();
  });

  async getAllDataWoUser() {
    const allData = await Promise.all([
      this.getCats,
      this.getBrands,
      this.getSubCats,
    ]);
    return {
      categories: allData[0],
      brands: allData[1],
      subCategories: allData[2],
    };
  }

  async getAllDataWithUser(slug: string) {
    const getSingleUser = new Promise((resolve, reject) => {
      const c1 = async () => {
        const user = await this.userModel.findOne({ slug: slug });
        resolve(user);
      };
      c1();
    });

    const getUserCart = new Promise((resolve, reject) => {
      const c1 = async () => {
        const cart = this.cartModel.aggregate([
          {
            $match: {
              user_slug: slug,
            },
          },
          {
            $lookup: {
              from: "products",
              localField: "product_slug",
              foreignField: "slug",
              as: "cartProducts",
            },
          },
          {
            $unwind: "$cartProducts",
          },
          {
            $addFields: {
              "cartProducts.quantity": "$quantity",
              "cartProducts.cart_slug": "$slug",
            },
          },
          {
            $replaceRoot: {
              newRoot: "$cartProducts",
            },
          },
        ]);
        resolve(cart);
      };
      c1();
    });

    const getUserWishlist = new Promise((resolve, reject) => {
      const c1 = async () => {
        const wishlist = await this.wishlistModel.aggregate([
          {
            $match: {
              user_slug: slug,
            },
          },
          {
            $project: {
              _id: 0,
            },
          },
        ]);
        resolve(wishlist);
      };
      c1();
    });

    const allData = await Promise.all([
      this.getCats,
      this.getBrands,
      this.getSubCats,
      getSingleUser,
      getUserCart,
      getUserWishlist,
    ]);
    
    return {
      categories: allData[0],
      brands: allData[1],
      subCategories: allData[2],
      user: allData[3],
      cart: allData[4],
      wishlist: allData[5],
    };
  }
}
