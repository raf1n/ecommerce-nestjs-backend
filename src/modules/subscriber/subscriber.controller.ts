import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from "@nestjs/common";
import { SubscriberService } from "./subscriber.service";
import { CreateSubscriberDto } from "./dto/create-subscriber.dto";
import { UpdateSubscriberDto } from "./dto/update-subscriber.dto";
import { SearchSortDto } from "src/utils/all-queries.dto";

@Controller("subscriber")
export class SubscriberController {
  constructor(private readonly subscriberService: SubscriberService) {}

  @Post()
  create(@Body() createSubscriberDto: CreateSubscriberDto) {
    return this.subscriberService.create(createSubscriberDto);
  }

  //..............
  @Get()
  async findAll(@Query() query: SearchSortDto) {
    return await this.subscriberService.findAll(query);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.subscriberService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateSubscriberDto: UpdateSubscriberDto
  ) {
    return this.subscriberService.update(+id, updateSubscriberDto);
  }

  @Delete(":slug")
  delete(@Param("slug") slug: string) {
    return this.subscriberService.delete(slug);
  }
}
