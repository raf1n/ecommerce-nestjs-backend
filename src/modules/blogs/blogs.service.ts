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
    // if (result) {
    //   return {
    //     data: result,
    //     message: "blog success",
    //   };
    // } else {
    //   return {
    //     message: "blog error",
    //   };
    // }
  }

  // findAll() {
  //   return `This action returns all blogs`;
  // }

  async findAll(): Promise<Blog[]> {
    return await this.blogModel.find({}).exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} blog`;
  }

  update(id: number, updateBlogDto: UpdateBlogDto) {
    return `This action updates a #${id} blog`;
  }

  remove(id: number) {
    return `This action removes a #${id} blog`;
  }
}
