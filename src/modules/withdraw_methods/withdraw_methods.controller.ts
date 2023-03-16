import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Query,
  Param,
  Delete,
} from "@nestjs/common";
import { WithdrawMethodsService } from "./withdraw_methods.service";
import { CreateWithdrawMethodDto } from "./dto/create-withdraw_method.dto";
import { UpdateWithdrawMethodDto } from "./dto/update-withdraw_method.dto";
import { SearchSortDto } from "src/utils/all-queries.dto";

@Controller("withdraw-methods")
export class WithdrawMethodsController {
  constructor(
    private readonly withdrawMethodsService: WithdrawMethodsService
  ) {}

  @Post()
  create(@Body() createWithdrawMethodDto: CreateWithdrawMethodDto) {
    return this.withdrawMethodsService.create(createWithdrawMethodDto);
  }

  @Get()
  findAll(@Query() queries: SearchSortDto) {
    return this.withdrawMethodsService.findAll(queries);
  }

  @Get(":slug")
  findOne(@Param("slug") slug: string) {
    return this.withdrawMethodsService.findOne(slug);
  }

  @Patch(":slug")
  update(
    @Param("slug") slug: string,
    @Body() updateWithdrawMethodDto: UpdateWithdrawMethodDto
  ) {
    return this.withdrawMethodsService.update(slug, updateWithdrawMethodDto);
  }

  @Delete(":slug")
  remove(@Param("slug") slug: string) {
    return this.withdrawMethodsService.remove(slug);
  }
}
