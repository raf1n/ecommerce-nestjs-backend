import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateBrandDto } from './create-brand.dto';

export class UpdateBrandDto extends PartialType(CreateBrandDto) {
  // @IsNotEmpty({ message: "slug can not be empty"})
  // @IsString({ message: 'slug should be string' })
  // slug: string;
}
