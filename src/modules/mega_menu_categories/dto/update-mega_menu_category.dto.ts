import { PartialType } from '@nestjs/mapped-types';
import { CreateMegaMenuCategoryDto } from './create-mega_menu_category.dto';

export class UpdateMegaMenuCategoryDto extends PartialType(CreateMegaMenuCategoryDto) {}
