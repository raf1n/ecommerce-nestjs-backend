import { PartialType } from '@nestjs/mapped-types';
import { CreateFlashSaleDto } from './create-flash_sale.dto';

export class UpdateFlashSaleDto extends PartialType(CreateFlashSaleDto) {}
