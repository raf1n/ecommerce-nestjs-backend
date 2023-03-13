import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { WithdrawMethodsService } from "./withdraw_methods.service";
import { CreateWithdrawMethodDto } from "./dto/create-withdraw_method.dto";
import { UpdateWithdrawMethodDto } from "./dto/update-withdraw_method.dto";

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
  findAll() {
    return this.withdrawMethodsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.withdrawMethodsService.findOne(+id);
  }

  @Patch(":slug")
  update(
    @Param("slug") slug: string,
    @Body() updateWithdrawMethodDto: UpdateWithdrawMethodDto
  ) {
    return this.withdrawMethodsService.update(slug, updateWithdrawMethodDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.withdrawMethodsService.remove(+id);
  }
}
