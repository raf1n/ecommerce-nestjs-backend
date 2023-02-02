import { Injectable } from '@nestjs/common';
import { CreatePopularCategoryDto } from './dto/create-popular_category.dto';
import { UpdatePopularCategoryDto } from './dto/update-popular_category.dto';

@Injectable()
export class PopularCategoriesService {
  create(createPopularCategoryDto: CreatePopularCategoryDto) {
    return 'This action adds a new popularCategory';
  }

  findAll() {
    return `This action returns all popularCategories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} popularCategory`;
  }

  update(id: number, updatePopularCategoryDto: UpdatePopularCategoryDto) {
    return `This action updates a #${id} popularCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} popularCategory`;
  }
}
