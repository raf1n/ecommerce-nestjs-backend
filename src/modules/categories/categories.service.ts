import { Category, CategoryDocument } from "./../../schemas/category.schema";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
import { UtilSlug } from "./../../utils/UtilSlug";

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name)
    private readonly categoryModel: Model<CategoryDocument>
  ) {}
  // create(createCategoryDto: CreateCategoryDto) {
  //   return 'This action adds a new category';
  // }
  async findAll(): Promise<Category[]> {
    return await this.categoryModel.find({ cat_status: "active" }).exec();
  }

  async findAllAdminCategories(query: any) {
    const allCategoriesData = await this.categoryModel
      .find({
        cat_name: new RegExp(query.search, "i"),
      })
      .sort({ [query.sortBy]: query.sortType });

    return allCategoriesData;
  }

  async findOne(slug: string) {
    const categoryFind = await this.categoryModel.findOne({ cat_slug: slug });

    return categoryFind;
  }
  async create(createCategoryDto: CreateCategoryDto): Promise<object> {
    createCategoryDto["cat_slug"] = UtilSlug.getUniqueId(
      createCategoryDto.cat_name
    );

    const result = await new this.categoryModel(createCategoryDto).save();
    if (result) {
      return { message: "Success" };
    }
  }

  async update(
    cat_slug: string,
    updateCategoryDto: UpdateCategoryDto
  ): Promise<UpdateCategoryDto> {
    return await this.categoryModel.findOneAndUpdate(
      { cat_slug },
      updateCategoryDto,
      {
        new: true,
      }
    );
  }

  async delete(slug: string): Promise<Category> {
    return await this.categoryModel.findOneAndDelete({ slug }).exec();
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
