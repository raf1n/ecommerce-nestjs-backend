import { InjectModel } from "@nestjs/mongoose";
import { Injectable } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { Product, ProductDocument } from "src/schemas/product.schema";
import { Model } from "mongoose";

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private readonly model: Model<ProductDocument>
  ) {}

  async create(createProductDto: CreateProductDto): Promise<string> {
    const result = await new this.model(createProductDto).save();
    if (result) {
      return "success";
    }
  }
  async findAll(): Promise<ProductDocument[]> {
    return this.model.find();
  }

  async findOne(id: string) {
    return this.model.findById(id);
  }

  async update(
    id: string,
    updateProductDto: UpdateProductDto
  ): Promise<string> {
    const result = await this.model.findByIdAndUpdate(id, updateProductDto);
    if (result) {
      return "updated";
    }
  }

  async delete(id: string): Promise<Product> {
    return await this.model.findByIdAndDelete(id);
  }
}
