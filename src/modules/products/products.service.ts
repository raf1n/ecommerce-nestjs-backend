import { InjectModel } from "@nestjs/mongoose";
import { Injectable } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { Product, ProductDocument } from "src/schemas/product.schema";
import { Model } from "mongoose";
import { filter } from "rxjs";
import { QueryDto } from "./dto/query.dto";

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private readonly portductModel: Model<ProductDocument>
    // @InjectModel(Portfolio.name)
    // private portfolioModel: Model<PortfolioDocument>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<object> {
    const result = await new this.portductModel(createProductDto).save();
    if (result) {
      return {
        message: "success",
      };
    } else {
      return {
        message: "error",
      };
    }
  }
  async findAll(query: QueryDto)
    // : Promise<ProductDocument[]>
  {
    // let limit: number = parseInt(query.limit) || 3
    // const page: number = parseInt(query.page) || 1
    const featuredProducts = await this.portductModel.find({ isFeatured: true })
    // .limit(limit)
    .sort({ createdAt: "asc" })
    .exec();
    console.log('usersPortfolios', featuredProducts);
    return {featuredProducts}
  }

  async findOne(slug: string) {
    return this.portductModel.findOne({ slug });
  }

  async update(
    slug: string,
    updateProductDto: UpdateProductDto
  ): Promise<string> {
    // const result = await this.model.findByIdAndUpdate(id, updateProductDto);
    const result = await this.portductModel.findOneAndUpdate(
      { slug },
      updateProductDto,
      { new: true }
    );
    if (result) {
      return "updated";
    }
  }

  async delete(slug: string): Promise<Product> {
    return await this.portductModel.findOneAndDelete({ slug });
  }
}
