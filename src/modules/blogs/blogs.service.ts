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

<<<<<<< HEAD
  // findAll() {
  //   return `This action returns all blogs`;
  // }

  async findAll(): Promise<object> {
    const allBlogs = await this.blogModel.find({}).exec();
    // var todayDate = new Date();
    // todayDate.setHours(0, 0, 0, 0);
    // todayDate.toISOString();
    var week = new Date();
    week.setHours(168, 10080, 604800, 604800000);
    const latestBlogs = await this.blogModel.aggregate([
      {
        $match: {
          createdAt: {
            $lte: week,
          },
        },
      },
    ]);
    return { allBlogs, latestBlogs };
=======
  async findAll(): Promise<Blog[]> {
    return await this.blogModel.find({}).exec();
>>>>>>> d5e2c5dc9299fa46d3886336d81be19a3fa4b071
  }

  async findOne(slug: string) {
    return await this.blogModel.findOne({ slug });
  }

  update(id: number, updateBlogDto: UpdateBlogDto) {
    return `This action updates a #${id} blog`;
  }

  remove(id: number) {
    return `This action removes a #${id} blog`;
  }
}
