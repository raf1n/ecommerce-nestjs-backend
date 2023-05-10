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
import { MailgunService } from "../mailgun/mailgun.service";

@Controller("subscriber")
export class SubscriberController {
  constructor(
    private readonly subscriberService: SubscriberService,
    private readonly mailgunService: MailgunService
  ) {}

  @Post()
  create(@Body() createSubscriberDto: CreateSubscriberDto) {
    return this.subscriberService.create(createSubscriberDto);
  }

  @Post("send-email")
  async sendEmail() {
    const data = {
      from: "iamhasan9501@gmail.com",
      to: [
        // "xivisos616@pixiil.com",
        // "rafinc10@gmail.com",
        // "ahmdtoukir@gmail.com",
        "iamiqbalcse27@gmail.com",
      ],
      subject:
        "Test subject :Building a Node API using Controllers and Routes ",
      text: "Thank you for choosing Mailgun! Please confirm your email address by clicking the link below. We'll communicate important updates with you from time to time via email, so it's essential that we have an up-to-date email address on file.!",
    };
    const result = await this.mailgunService.sendEmail(data);
    return { result };
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
