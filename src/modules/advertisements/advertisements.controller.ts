import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { AdvertisementsService } from "./advertisements.service";
import { CreateAdvertisementDto } from "./dto/create-advertisement.dto";
import { UpdateAdvertisementDto } from "./dto/update-advertisement.dto";

@Controller("advertisements")
export class AdvertisementsController {
  constructor(private readonly advertisementsService: AdvertisementsService) {}

  @Post()
  create(@Body() createAdvertisementDto: CreateAdvertisementDto) {
    return this.advertisementsService.create(createAdvertisementDto);
  }

  @Get()
  findAll() {
    return this.advertisementsService.findAll();
  }

  @Get("/home/:name")
  findSingleSlider(@Param("name") name: string) {
    return this.advertisementsService.findSingleSlider(name);
  }

  @Get(":name")
  findOne(@Param("name") name: string) {
    return this.advertisementsService.findOne(name);
  }

  @Patch(":slug")
  update(
    @Param("slug") slug: string,
    @Body() updateAdvertisementDto: UpdateAdvertisementDto
  ) {
    return this.advertisementsService.update(slug, updateAdvertisementDto);
  }

  @Delete(":slug")
  remove(@Param("slug") slug: string) {
    return this.advertisementsService.remove(slug);
  }
}
