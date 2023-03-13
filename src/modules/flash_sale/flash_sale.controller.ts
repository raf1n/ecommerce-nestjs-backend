import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { FlashSaleService } from "./flash_sale.service";
import { CreateFlashSaleDto } from "./dto/create-flash_sale.dto";
import { UpdateFlashSaleDto } from "./dto/update-flash_sale.dto";

@Controller("flash-sale")
export class FlashSaleController {
  constructor(private readonly flashSaleService: FlashSaleService) {}

  @Post()
  create(@Body() createFlashSaleDto: CreateFlashSaleDto) {
    return this.flashSaleService.create(createFlashSaleDto);
  }

  @Get()
  findAll() {
    return this.flashSaleService.findAll();
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
