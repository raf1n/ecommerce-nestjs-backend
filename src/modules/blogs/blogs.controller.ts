import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from "@nestjs/common";
import { BlogsService } from "./blogs.service";
import { CreateBlogDto } from "./dto/create-blog.dto";
import { UpdateBlogDto } from "./dto/update-blog.dto";

@Controller("blogs")
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Post()
  create(@Body() createBlogDto: CreateBlogDto) {
    return this.blogsService.create(createBlogDto);
  }

  @Get()
  findAll() {
    return this.blogsService.findAll();
  }

  @Get("/category")
  findFilteredBlogs(
    @Query()
    query: {
      category: string;
    }
  ) {
    return this.blogsService.findFilteredBlogs(query);
  }

  // @Get()
  // findAll(@Query() query: { user_slug: string }) {
  //   return this.cartService.findAll(query);
  // }

  @Get(":slug")
  findOne(@Param("slug") slug: string) {
    console.log(slug);
    return this.blogsService.findOne(slug);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateBlogDto: UpdateBlogDto) {
    return this.blogsService.update(+id, updateBlogDto);
  }

  @Delete(":slug")
  delete(@Param("slug") slug: string) {
    return this.blogsService.delete(slug);
  }
}
