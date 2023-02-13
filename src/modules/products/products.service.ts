// import { serviceHandler } from "./../../utils/ServiceHandler";
import { InjectModel } from "@nestjs/mongoose";
import { Injectable } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { Product, ProductDocument } from "src/schemas/product.schema";
import { Model } from "mongoose";
import { filter } from "rxjs";
import { QueryDto } from "./dto/query.dto";
import { UtilSlug } from './../../utils/UtilSlug';

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
      .find({ isFeatured: true }, { _id: 0 })
      // .limit(limit)
      .sort({ createdAt: "asc" })
      .exec();

    const topProducts = await this.productModel
      .find({ isTopProduct: true }, { _id: 0 })
      // .limit(limit)
      .sort({ createdAt: "asc" })
      .exec();

    const newProducts = await this.productModel
      .find({ isNewArrival: true }, { _id: 0 })
      // .limit(limit)
      .sort({ createdAt: "asc" })
      .exec();

    const bestProducts = await this.productModel
      .find({ isBestProduct: true }, { _id: 0 })
      // .limit(limit)
      .sort({ createdAt: "asc" })
      .exec();

    const popularProducts = await this.productModel
      .find({ isPopular: true }, { _id: 0 })
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
}
