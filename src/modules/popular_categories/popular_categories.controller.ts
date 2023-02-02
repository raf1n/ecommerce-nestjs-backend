import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
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
  findAll() {
    return this.popularCategoriesService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.popularCategoriesService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updatePopularCategoryDto: UpdatePopularCategoryDto
  ) {
    return this.popularCategoriesService.update(+id, updatePopularCategoryDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.popularCategoriesService.remove(+id);
  }
}
