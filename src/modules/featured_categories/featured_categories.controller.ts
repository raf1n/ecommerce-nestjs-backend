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
import { FeaturedCategoriesService } from "./featured_categories.service";
import { CreateFeaturedCategoryDto } from "./dto/create-featured_category.dto";
import { UpdateFeaturedCategoryDto } from "./dto/update-featured_category.dto";

@Controller("featured-categories")
export class FeaturedCategoriesController {
  constructor(
    private readonly featuredCategoriesService: FeaturedCategoriesService
  ) {}

  // @Post()
  // create(@Body() createFeaturedCategoryDto: CreateFeaturedCategoryDto) {
  //   return this.featuredCategoriesService.create(createFeaturedCategoryDto);
  // }
  @Post()
  create(@Body() createFeaturedCategoryDto: CreateFeaturedCategoryDto) {
    return this.featuredCategoriesService.create(createFeaturedCategoryDto);
  }
  @Get()
  findAll(@Query() query: { slug: string }) {
    return this.featuredCategoriesService.findAll(query);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.featuredCategoriesService.findOne(+id);
  }

  @Patch(":slug")
  update(
    @Param("slug") slug: string,
    @Body() updateFeaturedCategoryDto: UpdateFeaturedCategoryDto
  ) {
    return this.featuredCategoriesService.update(
      slug,
      updateFeaturedCategoryDto
    );
  }

  @Delete(":slug")
  delete(@Param("slug") slug: string) {
    return this.featuredCategoriesService.delete(slug);
  }
}
