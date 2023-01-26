import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Brand } from 'src/schemas/brand.schema';
import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { NewBrand } from './entities/brand.entity';

@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Post()
  create(@Body() createBrandDto: CreateBrandDto) {
    return this.brandsService.create(createBrandDto);
  }

  @Get()
  findAll(): Promise<NewBrand[]> {
    return this.brandsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.brandsService.findOne(+id);
  }

  @Patch(':slug')
  update(@Param('slug') slug: string, @Body() updateBrandDto: UpdateBrandDto) {
    return this.brandsService.update(slug, updateBrandDto);
  }

  @Delete(':slug')
  remove(@Param('slug') slug: string) {
    return this.brandsService.remove(slug);
  }
}
