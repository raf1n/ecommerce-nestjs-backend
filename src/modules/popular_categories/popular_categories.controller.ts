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
import { PopularCategoriesService } from "./popular_categories.service";
import { CreatePopularCategoryDto } from "./dto/create-popular_category.dto";
import { UpdatePopularCategoryDto } from "./dto/update-popular_category.dto";

@Controller("popular-categories")
export class PopularCategoriesController {
  constructor(
    private readonly popularCategoriesService: PopularCategoriesService
  ) {}

  @Post()
  create(@Body() createPopularCategoryDto: CreatePopularCategoryDto) {
    return this.popularCategoriesService.create(createPopularCategoryDto);
  }

  @Get()
  findAll(@Query() query: { slug: string }) {
    return this.popularCategoriesService.findAll(query);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.popularCategoriesService.findOne(+id);
  }

  @Patch(":slug")
  update(
    @Param("slug") slug: string,
    @Body() updatePopularCategoryDto: UpdatePopularCategoryDto
  ) {
    return this.popularCategoriesService.update(slug, updatePopularCategoryDto);
  }

  @Delete(":slug")
  delete(@Param("slug") slug: string) {
    return this.popularCategoriesService.delete(slug);
  }
}
