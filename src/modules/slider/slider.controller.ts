import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
} from "@nestjs/common";
import { SliderService } from "./slider.service";
import { CreateSliderDto } from "./dto/create-slider.dto";
import { UpdateSliderDto } from "./dto/update-slider.dto";
import { SearchSortDto } from "src/utils/all-queries.dto";
import { Query } from "@nestjs/common/decorators";

@Controller("slider")
export class SliderController {
  constructor(private readonly sliderService: SliderService) {}

  @Post()
  create(@Body() createSliderDto: CreateSliderDto) {
    return this.sliderService.create(createSliderDto);
  }

  @Get()
  findAll() {
    return this.sliderService.findAll();
  }

  @Get("/admin")
  async findAllAdminCategories(
    @Query() query: SearchSortDto,
    @Request() req: Request
  ) {
    return await this.sliderService.findAllAdminSliders(query);
  }

  // @Get(":id")
  // findOne(@Param("id") id: string) {
  //   return this.sliderService.findOne(+id);
  // }

  @Get(":slug")
  async find(@Param("slug") slug: string) {
    return this.sliderService.findOne(slug);
  }

  // @Patch(":id")
  // update(@Param("id") id: string, @Body() updateSliderDto: UpdateSliderDto) {
  //   return this.sliderService.update(+id, updateSliderDto);
  // }

  @Patch(":slug")
  update(
    @Param("slug") slug: string,
    @Body() updateSliderDto: UpdateSliderDto
  ) {
    return this.sliderService.update(slug, updateSliderDto);
  }

  // @Delete(":id")
  // remove(@Param("id") id: string) {
  //   return this.sliderService.remove(+id);
  // }

  @Delete(":slug")
  delete(@Param("slug") slug: string) {
    return this.sliderService.delete(slug);
  }
}
