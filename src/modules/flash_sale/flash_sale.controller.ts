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
import { FlashSaleService } from "./flash_sale.service";
import { CreateFlashSaleDto } from "./dto/create-flash_sale.dto";
import { UpdateFlashSaleDto } from "./dto/update-flash_sale.dto";
import { SearchSortDto } from "src/utils/all-queries.dto";

@Controller("flash-sale")
export class FlashSaleController {
  constructor(private readonly flashSaleService: FlashSaleService) {}

  @Post()
  create(@Body() createFlashSaleDto: CreateFlashSaleDto) {
    return this.flashSaleService.create(createFlashSaleDto);
  }

  @Get()
  findAll(@Query() query: SearchSortDto) {
    return this.flashSaleService.findAll(query);
  }

  @Get(":slug")
  findOne(@Param("slug") slug: string) {
    return this.flashSaleService.findOne(slug);
  }

  @Patch(":slug")
  update(
    @Param("slug") slug: string,
    @Body() updateFlashSaleDto: UpdateFlashSaleDto
  ) {
    return this.flashSaleService.update(slug, updateFlashSaleDto);
  }

  @Delete(":slug")
  remove(@Param("slug") slug: string) {
    return this.flashSaleService.remove(slug);
  }
}
