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
    private readonly wishlistModel: Model<WishlistDocument>
  ) {}

  getHello(): string {
    return "Hello World!";
  }

  async getAllDataWoUser() {
    const getCats = new Promise((resolve, reject) => {
      const c1 = async () => {
        const categories = await this.categoryModel.find({
          cat_status: "active",
        });
        resolve(categories);
      };
      c1();
    });

    const getBrands = new Promise((resolve, reject) => {
      const c1 = async () => {
        const brands = await this.brandModel.find({ status: "active" });
        resolve(brands);
      };
      c1();
    });

    const getSubCats = new Promise((resolve, reject) => {
      const c1 = async () => {
        const subCats = await this.subCategoryModel.find({
          subcat_status: "active",
        });
        resolve(subCats);
      };
      c1();
    });

    const allData = await Promise.all([getCats, getBrands, getSubCats]);
    return {
      categories: allData[0],
      brands: allData[1],
      subCategories: allData[2],
    };
  }

  getAllDataWithUser(): string {
    return "Hello World!";
  }
}
