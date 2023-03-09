// import { serviceHandler } from "./../../utils/ServiceHandler";
import { InjectModel } from "@nestjs/mongoose";
import { Injectable } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { Product, ProductDocument } from "src/schemas/product.schema";
import { Model } from "mongoose";
import { UtilSlug } from "./../../utils/UtilSlug";

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Object> {
    createProductDto["slug"] = UtilSlug.getUniqueId(
      createProductDto.productName
    );

    const result = await new this.productModel(createProductDto).save();
    if (result) {
      return {
        data: result,
        message: "success",
      };
    } else {
      return {
        message: "error",
      };
    }
  }

  async findFilteredProducts(query: {
    search: string;
    categories: string;
    brands: string;
    max: string;
    min: string;
  }): Promise<Product[]> {
    const search = query.search;
    const categoriesStrArr = query.categories
      ? query.categories.split(" ").slice(1)
      : [""];
    const brandsStrArr = query.brands ? query.brands.split(" ").slice(1) : [""];
    const maxRange = parseInt(query.max);
    const minRange = parseInt(query.min);

    // console.log({ categoriesStrArr, brandsStrArr, maxRange, minRange });

    const categoryFilter = Object.assign(
      query.categories
        ? {
            $or: categoriesStrArr.map((cat) => {
              return {
                catSlug: {
                  $regex: "(?i)" + cat + "(?-i)",
                },
              };
            }),
          }
        : {}
    );

    const brandFilter = Object.assign(
      query.brands
        ? {
            $or: brandsStrArr.map((brand) => {
              return {
                brandSlug: {
                  $regex: "(?i)" + brand + "(?-i)",
                },
              };
            }),
          }
        : {}
    );

    const filteredProducts = await this.productModel.aggregate([
      {
        $match: {
          $and: [
            {
              productName: { $regex: "(?i)" + search + "(?-i)" },
            },
            categoryFilter,
            brandFilter,
            {
              $or: [
                {
                  price: {
                    $gte: minRange,
                    $lte: maxRange,
                  },
                },
                {
                  offerPrice: {
                    $gte: minRange,
                    $lte: maxRange,
                  },
                },
              ],
            },
          ],
        },
      },
    ]);

    return filteredProducts;
  }

  //   async findAll(): Promise<ProductDocument[]> {
  //   const allProductData = await this.productModel.find();
  //   return allProductData;
  // }

  //    async findOne(slug: string) {
  //   return this.productModel.findOne({ slug });
  async findAll(
    query: any // : Promise<ProductDocument[]>
  ) {
    const allProductData = await this.productModel.find();
    // let limit: number = parseInt(query.limit) || 3
    // const page: number = parseInt(query.page) || 1
    const featuredProducts = await this.productModel
      .find({ isFeatured: true, status: "active" }, { _id: 0 })
      // .limit(limit)
      .sort({ createdAt: "asc" })
      .exec();

    const topProducts = await this.productModel
      .find({ isTopProduct: true, status: "active" }, { _id: 0 })
      // .limit(limit)
      .sort({ createdAt: "asc" })
      .exec();

    const newProducts = await this.productModel
      .find({ isNewArrival: true, status: "active" }, { _id: 0 })
      // .limit(limit)
      .sort({ createdAt: "asc" })
      .exec();

    const bestProducts = await this.productModel
      .find({ isBestProduct: true, status: "active" }, { _id: 0 })
      // .limit(limit)
      .sort({ createdAt: "asc" })
      .exec();

    const popularProducts = await this.productModel
      .find({ isPopular: true, status: "active" }, { _id: 0 })
      // .limit(limit)
      .sort({ createdAt: "asc" })
      .exec();

    return {
      featuredProducts,
      topProducts,
      popularProducts,
      bestProducts,
      newProducts,
      allProductData,
    };
  }

  async findAllAdminProducts(
    query: any // : Promise<ProductDocument[]>
  ) {
    const allProductData = await this.productModel
      .find({ productName: new RegExp(query.search, "i") })
      .sort({ [query.sortBy]: query.sortType });

    // const allProductData = await serviceHandler.queryHandler(
    //   this.productModel,
    //   query
    // );

    // let limit: number = parseInt(query.limit) || 3
    // const page: number = parseInt(query.page) || 1

    const stockOutProducts = await this.productModel
      .find({ stock: 0, productName: new RegExp(query.search, "i") })
      .sort({ [query.sortBy]: query.sortType });

    const sellerProducts = await this.productModel
      .find({ addedBy: "seller", productName: new RegExp(query.search, "i") })
      .sort({ [query.sortBy]: query.sortType });

    const sellerPendingProducts = await this.productModel
      .find({
        addedBy: "seller",
        approvalStatus: "pending",
        productName: new RegExp(query.search, "i"),
      })
      .sort({ [query.sortBy]: query.sortType });
    return {
      allProductData,
      stockOutProducts,
      sellerProducts,
      sellerPendingProducts,
    };
  }

  async findAllSellerProducts(
    slug: string,
    query: any // : Promise<ProductDocument[]>
  ) {
    const allProductData = await this.productModel
      .find({ productName: new RegExp(query.search, "i"), seller_slug: slug })
      .sort({ [query.sortBy]: query.sortType });

    // const allProductData = await serviceHandler.queryHandler(
    //   this.productModel,
    //   query
    // );

    // let limit: number = parseInt(query.limit) || 3
    // const page: number = parseInt(query.page) || 1

    const stockOutProducts = await this.productModel
      .find({
        stock: 0,
        productName: new RegExp(query.search, "i"),
        seller_slug: slug,
      })
      .sort({ [query.sortBy]: query.sortType });

    // const sellerProducts = await this.productModel
    //   .find({ addedBy: "seller", productName: new RegExp(query.search, "i") })
    //   .sort({ [query.sortBy]: query.sortType });

    const sellerPendingProducts = await this.productModel
      .find({
        addedBy: "seller",
        approvalStatus: "pending",
        productName: new RegExp(query.search, "i"),
        seller_slug: slug,
      })
      .sort({ [query.sortBy]: query.sortType });
    return {
      allProductData,
      stockOutProducts,
      // sellerProducts,
      sellerPendingProducts,
    };
  }

  async findOne(slug: string) {
    return this.productModel.findOne({ slug });
  }

  async update(
    slug: string,
    updateProductDto: UpdateProductDto
  ): Promise<Product> {
    // const result = await this.model.findByIdAndUpdate(id, updateProductDto);
    const result = await this.productModel.findOneAndUpdate(
      { slug: slug },
      updateProductDto,
      { new: true }
    );
    return result;
  }

  async delete(slug: string): Promise<Product> {
    return await this.productModel.findOneAndDelete({ slug });
  }

  async getProductsInventory(): Promise<Product[]> {
    const result = await this.productModel.aggregate([
      {
        $match: {
          productName: {
            $regex: "(?i)" + "" + "(?-i)",
          },
        },
      },
    ]);

    return result;
  }

  async getSellerProductsInventory(seller_slug: string): Promise<Product[]> {
    const result = await this.productModel.aggregate([
      {
        $match: {
          seller_slug: seller_slug,
          productName: {
            $regex: "(?i)" + "" + "(?-i)",
          },
        },
      },
    ]);

    return result;
  }

  async getSingleProductsInventory(slug: string) {
    const result = await this.productModel.aggregate([
      {
        $match: {
          slug: {
            $regex: "(?i)" + slug + "(?-i)",
          },
        },
      },
      {
        $lookup: {
          from: "inventories",
          localField: "slug",
          foreignField: "product_slug",
          as: "stockInData",
          pipeline: [
            {
              $match: {
                type: "stockIn",
              },
            },
          ],
        },
      },
    ]);

    return result[0];
  }
}
