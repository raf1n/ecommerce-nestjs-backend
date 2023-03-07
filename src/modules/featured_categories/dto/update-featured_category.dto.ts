import { PartialType } from '@nestjs/mapped-types';
import { CreateFeaturedCategoryDto } from './create-featured_category.dto';

export class UpdateFeaturedCategoryDto extends PartialType(CreateFeaturedCategoryDto) {}
