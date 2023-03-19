import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Blog, BlogDocument } from "src/schemas/blog.schema";
import { UtilSlug } from "src/utils/UtilSlug";
import { CreateBlogDto } from "./dto/create-blog.dto";
import { UpdateBlogDto } from "./dto/update-blog.dto";

@Injectable()
export class BlogsService {
  constructor(
    @InjectModel(Blog.name)
    private readonly blogModel: Model<BlogDocument>
  ) {}

  async create(createBlogDto: CreateBlogDto): Promise<Object> {
    createBlogDto["slug"] = UtilSlug.getUniqueId(createBlogDto.title);
    const result = await new this.blogModel(createBlogDto).save();
    return result;
  }

  async findAll(): Promise<Blog[]> {
    return await this.blogModel.find({}).exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} blog`;
  }
  async findFilteredBlogs(query: { category: string }) {
    return await this.blogModel.find({ category: query.category });
  }

  // async findAllCompleted(slug: string, order_status: string) {
  //   const result = await this.orderModel.find({
  //     user_slug: slug,
  //     order_status: new RegExp(order_status, "i"),
  //   });

  //   return {
  //     data: result,
  //     message: "fetched Successfully",
  //   };
  // }

  update(id: number, updateBlogDto: UpdateBlogDto) {
    return `This action updates a #${id} blog`;
  }

  //-----------
  async delete(slug: string): Promise<Blog> {
    return await this.blogModel.findOneAndDelete({ slug });
  }
}
