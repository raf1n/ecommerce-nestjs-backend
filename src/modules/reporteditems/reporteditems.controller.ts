import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  Query,
} from "@nestjs/common";
import { ReporteditemsService } from "./reporteditems.service";
import { CreateReporteditemDto } from "./dto/create-reporteditem.dto";
import { UpdateReporteditemDto } from "./dto/update-reporteditem.dto";
import { SearchSortDto } from "src/utils/all-queries.dto";

@Controller("reporteditems")
export class ReporteditemsController {
  constructor(private readonly reporteditemsService: ReporteditemsService) {}

  @Post()
  create(@Body() createReporteditemDto: CreateReporteditemDto) {
    return this.reporteditemsService.create(createReporteditemDto);
  }

  // @Get()
  // findAll() {
  //   return this.reporteditemsService.findAll();
  // }

  @Get("/findAllForAdmin")
  findAllForAdmin(@Query() query: SearchSortDto, @Request() req: Request) {
    console.log(query);
    return this.reporteditemsService.findAllForAdmin(query);
  }

  @Get("/findAllForSeller/:seller_slug")
  findAllForSeller(
    @Query() query: SearchSortDto,
    @Param("seller_slug") seller_slug: string
  ) {
    console.log(seller_slug);
    return this.reporteditemsService.findAllForSeller(query, seller_slug);
  }

  // ---------------------------------
  @Get(":slug")
  findOne(@Param("slug") slug: string) {
    return this.reporteditemsService.findSingleReportForSeller(slug);
  }
  // @Get(":id")
  // findOne(@Param("id") id: string) {
  //   return this.reporteditemsService.findOne(+id);
  // }

  @Get(":slug")
  async find(@Param("slug") slug: string) {
    console.log(slug);
    return this.reporteditemsService.findOne(slug);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateReporteditemDto: UpdateReporteditemDto
  ) {
    return this.reporteditemsService.update(+id, updateReporteditemDto);
  }

  // @Delete(":id")
  // remove(@Param("id") id: string) {
  //   return this.reporteditemsService.remove(+id);
  // }

  @Delete(":slug")
  delete(@Param("slug") slug: string) {
    return this.reporteditemsService.delete(slug);
  }
}
