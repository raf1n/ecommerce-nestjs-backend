import { InjectModel } from "@nestjs/mongoose";
import { Injectable } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { Product, ProductDocument } from "src/schemas/product.schema";
import { Model } from "mongoose";
import { filter } from "rxjs";

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>
  ) {}

  async create(createProductDto: CreateProductDto): Promise<object> {
    const result = await new this.productModel(createProductDto).save();
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
  async findAll(): Promise<ProductDocument[]> {
    const allProductData = await this.productModel.find();
    return allProductData;
  }

  async findOne(slug: string) {
    return this.productModel.findOne({ slug });
  }

  async update(
    slug: string,
    updateProductDto: UpdateProductDto
  ): Promise<string> {
    // const result = await this.model.findByIdAndUpdate(id, updateProductDto);
    const result = await this.productModel.findOneAndUpdate(
      { slug },
      updateProductDto,
      { new: true }
    );
    if (result) {
      return "updated";
    }
  }

  async delete(slug: string): Promise<Product> {
    return await this.productModel.findOneAndDelete({ slug });
  }
}
