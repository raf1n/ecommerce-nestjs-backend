import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Put,
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

  // @Put("content")
  // createflash(@Body() createFlashSaleDto: CreateFlashSaleDto) {
  //   return this.flashSaleService.createflash(createFlashSaleDto);
  // }

  @Put("content")
  updateflash(
    @Param("sale_slug") sale_slug: string,
    @Body() updateFlashSaleDto: UpdateFlashSaleDto
  ) {
    return this.flashSaleService.update(sale_slug, updateFlashSaleDto);
  }

  @Get()
  findAll(@Query() query: SearchSortDto) {
    return this.flashSaleService.findAll(query);
  }

  @Get(":user")
  findAllforUser(product_slug) {
    return this.flashSaleService.findAllUser(product_slug);
  }

  @Get(":slug")
  findOne(@Param("slug") slug: string) {
    return this.flashSaleService.findOne(slug);
  }

  @Get("content/:sale_slug")
  findAllflash(@Param("sale_slug") sale_slug: string) {
    return this.flashSaleService.findAllflash(sale_slug);
  }

  @Patch(":slug")
  update(
    @Param("slug") slug: string,
    @Body() updateFlashSaleDto: UpdateFlashSaleDto
  ) {
    return this.flashSaleService.update(slug, updateFlashSaleDto);
  }

  // @Patch("content/:sale_slug")
  // updateflash(
  //   @Param("sale_slug") sale_slug: string,
  //   @Body() updateFlashSaleDto: UpdateFlashSaleDto
  // ) {
  //   return this.flashSaleService.update(sale_slug, updateFlashSaleDto);
  // }

  @Delete(":slug")
  remove(@Param("slug") slug: string) {
    return this.flashSaleService.remove(slug);
  }
}
