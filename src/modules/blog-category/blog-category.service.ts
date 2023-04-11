import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BlogCategory } from "src/schemas/blog-category.schema";
import { UtilSlug } from "src/utils/UtilSlug";
import { CreateBlogCategoryDto } from "./dto/create-blog-category.dto";
import { UpdateBlogCategoryDto } from "./dto/update-blog-category.dto";

@Injectable()
export class BlogCategoryService {
  constructor(
    @InjectModel(BlogCategory.name)
    private readonly blogCategoryModel: Model<Document>
  ) {}

  async create(createBlogCategoryDto: CreateBlogCategoryDto) {
    createBlogCategoryDto["slug"] = UtilSlug.getUniqueId(
      createBlogCategoryDto.name
    );
    return await new this.blogCategoryModel(createBlogCategoryDto).save();
  }

  async findAll(): Promise<BlogCategory[]> {
    return await this.blogCategoryModel.find({});
  }
  async findAllForBlog(): Promise<BlogCategory[]> {
    return await this.blogCategoryModel.find({ status: "active" });
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} blogCategory`;
  // }
  async findOne(slug: string) {
    return this.blogCategoryModel.findOne({ slug: slug });
  }

  // update(id: number, updateBlogCategoryDto: UpdateBlogCategoryDto) {
  //   return `This action updates a #${id} blogCategory`;
  // }

  async update(
    slug: string,
    updateBlogCategoryDto: UpdateBlogCategoryDto
  ): Promise<any> {
    const result = await this.blogCategoryModel.findOneAndUpdate(
      { slug: slug },
      updateBlogCategoryDto,
      { new: true }
    );
    return result;
  }

  //-------status update ---------------
  async updateStatus(
    slug: string,
    updateBlogCategoryDto: UpdateBlogCategoryDto
  ): Promise<any> {
    console.log(updateBlogCategoryDto);
    const updatedStatus = await this.blogCategoryModel.findOneAndUpdate(
      { slug: slug },
      updateBlogCategoryDto,
      {
        new: true,
      }
    );
    console.log(updatedStatus);
    return updatedStatus;
  }
  //------------------------

  async delete(slug: string): Promise<BlogCategory> {
    return await this.blogCategoryModel.findOneAndDelete({ slug });
  }
}
