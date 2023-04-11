import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { Put, Query, Request } from "@nestjs/common/decorators";
import { SearchSortDto } from "src/utils/all-queries.dto";
import { CategoriesService } from "./categories.service";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";

@Controller("categories")
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }
  // @Get()
  // async index() {
  //   return await this.categoriesService.findAll();
  // }

  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get("/admin")
  async findAllAdminCategories(
    @Query() query: SearchSortDto,
    @Request() req: Request
  ) {
    return await this.categoriesService.findAllAdminCategories(query);
  }

  @Get(":slug")
  async find(@Param("slug") slug: string) {
    return this.categoriesService.findOne(slug);
  }

  // @Get(":id")
  // findOne(@Param("id") id: string) {
  //   return this.categoriesService.findOne(id);
  // }

  @Patch(":slug")
  update(
    @Param("slug") slug: string,
    @Body() updateCategoryDto: UpdateCategoryDto
  ) {
    return this.categoriesService.update(slug, updateCategoryDto);
  }

  @Delete(":slug")
  delete(@Param("slug") slug: string) {
    return this.categoriesService.delete(slug);
  }
}
