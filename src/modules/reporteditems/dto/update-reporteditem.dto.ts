import { PartialType } from '@nestjs/mapped-types';
import { CreateReporteditemDto } from './create-reporteditem.dto';

export class UpdateReporteditemDto extends PartialType(CreateReporteditemDto) {}
