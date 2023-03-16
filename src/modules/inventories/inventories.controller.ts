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
import { InventoriesService } from "./inventories.service";
import { CreateInventoryDto } from "./dto/create-inventory.dto";
import { UpdateInventoryDto } from "./dto/update-inventory.dto";
import { SearchSortDto } from "src/utils/all-queries.dto";

@Controller("inventories")
export class InventoriesController {
  constructor(private readonly inventoriesService: InventoriesService) {}

  @Post()
  create(@Body() createInventoryDto: CreateInventoryDto) {
    return this.inventoriesService.create(createInventoryDto);
  }

  @Get(":slug")
  findOne(@Param("slug") slug: string) {
    return this.inventoriesService.findOne(slug);
  }

  @Patch(":slug")
  update(
    @Param("slug") slug: string,
    @Body() updateInventoryDto: UpdateInventoryDto
  ) {
    return this.inventoriesService.update(slug, updateInventoryDto);
  }

  @Delete(":slug")
  remove(@Param("slug") slug: string) {
    return this.inventoriesService.remove(slug);
  }
}
