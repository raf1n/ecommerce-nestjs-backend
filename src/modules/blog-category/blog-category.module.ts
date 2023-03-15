import { Module } from "@nestjs/common";
import { BlogCategoryService } from "./blog-category.service";
import { BlogCategoryController } from "./blog-category.controller";
import { BlogCategory } from "src/schemas/blog-category.schema";
import { BlogCategorySchema } from "src/schemas/blog-category.schema";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BlogCategory.name, schema: BlogCategorySchema },
    ]),
  ],
  controllers: [BlogCategoryController],
  providers: [BlogCategoryService],
})
export class BlogCategoryModule {}
