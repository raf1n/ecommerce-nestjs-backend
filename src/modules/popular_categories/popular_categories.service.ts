import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import {
  PopularCategory,
  PopularCategoryDocument,
} from "src/schemas/popular-category.schema";
import { CreatePopularCategoryDto } from "./dto/create-popular_category.dto";
import { UpdatePopularCategoryDto } from "./dto/update-popular_category.dto";

@Injectable()
export class PopularCategoriesService {
  constructor(
    @InjectModel(PopularCategory.name)
    private readonly popularCategoryModel: Model<PopularCategoryDocument>
  ) {}
  // create(createPopularCategoryDto: CreatePopularCategoryDto) {
  //   return 'This action adds a new popularCategory';
  // }

  async create(
    createPopularCategoryDto: CreatePopularCategoryDto
  ): Promise<object> {
    const result = await new this.popularCategoryModel(
      createPopularCategoryDto
    ).save();
    if (result) {
      return { message: "Success" };
    }
  }

  // findAll() {
  //   return `This action returns all popularCategories`;
  // }

  async findAll(): Promise<PopularCategory[]> {
    return await this.popularCategoryModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} popularCategory`;
  }

  update(id: number, updatePopularCategoryDto: UpdatePopularCategoryDto) {
    return `This action updates a #${id} popularCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} popularCategory`;
  }
}
