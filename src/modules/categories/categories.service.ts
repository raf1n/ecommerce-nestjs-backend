import { Category, CategoryDocument } from "./../../schemas/category.schema";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private readonly model: Model<CategoryDocument>
  ) {}
  // create(createCategoryDto: CreateCategoryDto) {
  //   return 'This action adds a new category';
  // }
  async findAll(): Promise<Category[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Category> {
    return await this.model.findById(id).exec();
  }
  async create(createCategoryDto: CreateCategoryDto): Promise<object> {
    const result = await new this.model(createCategoryDto).save();
    if (result) {
      return { message: "Success" };
    }
  }

  async update(
    id: string,
    updateCategoryDto: UpdateCategoryDto
  ): Promise<UpdateCategoryDto> {
    return await this.model.findByIdAndUpdate(id, updateCategoryDto);
  }

  async delete(id: string): Promise<Category> {
    return await this.model.findByIdAndDelete(id).exec();
  }

  // findAll() {
  //   return `This action returns all categories`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} category`;
  // }

  // update(id: number, updateCategoryDto: UpdateCategoryDto) {
  //   return `This action updates a #${id} category`;
  // }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
