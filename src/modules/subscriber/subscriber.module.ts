import { Module } from "@nestjs/common";
import { SubscriberService } from "./subscriber.service";
import { SubscriberController } from "./subscriber.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Subscriber, SubscriberSchema } from "src/schemas/subscriber.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Subscriber.name, schema: SubscriberSchema },
    ]),
  ],
  controllers: [SubscriberController],
  providers: [SubscriberService],
})
export class SubscriberModule {}
