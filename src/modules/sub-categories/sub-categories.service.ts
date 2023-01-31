import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import {
  SubCategories,
  SubCategoriesDocument,
} from "src/schemas/sub-category.schema";
import { CreateSubCategoryDto } from "./dto/create-sub-category.dto";
import { UpdateSubCategoryDto } from "./dto/update-sub-category.dto";

@Injectable()
export class SubCategoriesService {
  constructor(
    @InjectModel(SubCategories.name)
    private readonly subCategoryModel: Model<SubCategoriesDocument>
  ) {}

  // create(createSubCategoryDto: CreateSubCategoryDto) {
  //   return "This action adds a new subCategory";
  // }

  async findAll(): Promise<SubCategoriesService[]> {
    return await this.subCategoryModel.aggregate([
      {
        $lookup: {
          from: "categories",
          localField: "cat_slug",
          foreignField: "cat_slug",
          as: "mufez"
        },
      },
    ]);
    // return await this.subCategoryModel.find();
  }

  async findOne(slug: string) {
    console.log(slug);
    const subCategoryFind = await this.subCategoryModel.findOne({ slug: slug });
    console.log(subCategoryFind);
    return subCategoryFind;
  }

  async create(createSubCategoryDto: CreateSubCategoryDto): Promise<object> {
    const result = await new this.subCategoryModel(createSubCategoryDto).save();
    if (result) {
      return { message: "Success" };
    }
  }

  async update(
    slug: string,
    updateSubCategoryDto: UpdateSubCategoryDto
  ): Promise<UpdateSubCategoryDto> {
    return await this.subCategoryModel.findOneAndUpdate(
      { slug },
      updateSubCategoryDto,
      {
        new: true,
      }
    );
  }

  async delete(slug: string): Promise<SubCategories> {
    return await this.subCategoryModel.findOneAndDelete({ slug }).exec();
  }

  // findAll() {
  //   return `This action returns all subCategories`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} subCategory`;
  // }

  // update(id: number, updateSubCategoryDto: UpdateSubCategoryDto) {
  //   return `This action updates a #${id} subCategory`;
  // }

  remove(id: number) {
    return `This action removes a #${id} subCategory`;
  }
}
