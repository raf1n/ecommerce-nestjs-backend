import { IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateWithdrawMethodDto } from './create-withdraw_method.dto';

export class UpdateWithdrawMethodDto extends PartialType(CreateWithdrawMethodDto) {
  @IsString()
  status: string;
}
