import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { SeoService } from "./seo.service";
import { CreateSeoDto } from "./dto/create-seo.dto";
import { UpdateSeoDto } from "./dto/update-seo.dto";

@Controller("seo")
export class SeoController {
  constructor(private readonly seoService: SeoService) {}

  @Post()
  create(@Body() createSeoDto: CreateSeoDto) {
    return this.seoService.create(createSeoDto);
  }

  @Get()
  findAll() {
    return this.seoService.findAll();
  }

  @Get(":topic")
  findOne(@Param("topic") topic: string) {
    return this.seoService.findOne(topic);
  }

  @Patch(":topic")
  update(@Param("topic") topic: string, @Body() updateSeoDto: UpdateSeoDto) {
    return this.seoService.update(topic, updateSeoDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.seoService.remove(+id);
  }
}
