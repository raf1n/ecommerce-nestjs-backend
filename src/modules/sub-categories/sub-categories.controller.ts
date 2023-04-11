import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { SubCategoriesService } from "./sub-categories.service";
import { CreateSubCategoryDto } from "./dto/create-sub-category.dto";
import { UpdateSubCategoryDto } from "./dto/update-sub-category.dto";
import { Query, Request } from "@nestjs/common/decorators";
import { SearchSortDto } from "src/utils/all-queries.dto";

@Controller("sub-categories")
export class SubCategoriesController {
  constructor(private readonly subCategoriesService: SubCategoriesService) {}

  @Post()
  create(@Body() createSubCategoryDto: CreateSubCategoryDto) {
    return this.subCategoriesService.create(createSubCategoryDto);
  }

  // @Get()
  // findAll() {
  //   return this.subCategoriesService.findAll();
  // }

  @Get("/admin")
  async findAllAdminSubCategories(
    @Query() query: SearchSortDto,
    @Request() req: Request
  ) {
    return await this.subCategoriesService.findAllAdminSubCategories(query);
  }

  @Get()
  async findAllSubCategories(@Request() req: Request) {
    return await this.subCategoriesService.findAllSubCategories();
  }

  @Get(":slug")
  findOne(@Param("slug") slug: string) {
    return this.subCategoriesService.findOne(slug);
  }

  @Patch(":slug")
  update(
    @Param("slug") slug: string,
    @Body() updateSubCategoryDto: UpdateSubCategoryDto
  ) {
    return this.subCategoriesService.update(slug, updateSubCategoryDto);
  }

  @Delete(":slug")
  remove(@Param("slug") slug: string) {
    return this.subCategoriesService.delete(slug);
  }
}
