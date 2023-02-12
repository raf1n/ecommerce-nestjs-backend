import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReporteditemsService } from './reporteditems.service';
import { CreateReporteditemDto } from './dto/create-reporteditem.dto';
import { UpdateReporteditemDto } from './dto/update-reporteditem.dto';

@Controller('reporteditems')
export class ReporteditemsController {
  constructor(private readonly reporteditemsService: ReporteditemsService) {}

  @Post()
  create(@Body() createReporteditemDto: CreateReporteditemDto) {
    return this.reporteditemsService.create(createReporteditemDto);
  }

  @Get()
  findAll() {
    return this.reporteditemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reporteditemsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReporteditemDto: UpdateReporteditemDto) {
    return this.reporteditemsService.update(+id, updateReporteditemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reporteditemsService.remove(+id);
  }
}
