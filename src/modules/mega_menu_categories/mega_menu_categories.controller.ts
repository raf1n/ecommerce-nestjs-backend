import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MegaMenuCategoriesService } from './mega_menu_categories.service';
import { CreateMegaMenuCategoryDto } from './dto/create-mega_menu_category.dto';
import { UpdateMegaMenuCategoryDto } from './dto/update-mega_menu_category.dto';

@Controller('mega-menu-categories')
export class MegaMenuCategoriesController {
  constructor(private readonly megaMenuCategoriesService: MegaMenuCategoriesService) {}

  @Post()
  create(@Body() createMegaMenuCategoryDto: CreateMegaMenuCategoryDto) {
    return this.megaMenuCategoriesService.create(createMegaMenuCategoryDto);
  }

  @Get()
  findAll() {
    return this.megaMenuCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.megaMenuCategoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMegaMenuCategoryDto: UpdateMegaMenuCategoryDto) {
    return this.megaMenuCategoriesService.update(+id, updateMegaMenuCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.megaMenuCategoriesService.remove(+id);
  }
}
