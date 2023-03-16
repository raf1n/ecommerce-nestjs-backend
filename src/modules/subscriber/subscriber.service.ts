import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Subscriber, SubscriberDocument } from "src/schemas/subscriber.schema";
import { UtilSlug } from "src/utils/UtilSlug";
import { CreateSubscriberDto } from "./dto/create-subscriber.dto";
import { UpdateSubscriberDto } from "./dto/update-subscriber.dto";

@Injectable()
export class SubscriberService {
  constructor(
    @InjectModel(Subscriber.name)
    private readonly subscriberModel: Model<SubscriberDocument>
  ) {}

  async create(createSubscriberDto: CreateSubscriberDto): Promise<Object> {
    createSubscriberDto["slug"] = UtilSlug.getUniqueId(
      createSubscriberDto.email
    );
    return await new this.subscriberModel(createSubscriberDto).save();
  }

  findAll() {
    return `This action returns all subscriber`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subscriber`;
  }

  update(id: number, updateSubscriberDto: UpdateSubscriberDto) {
    return `This action updates a #${id} subscriber`;
  }

  remove(id: number) {
    return `This action removes a #${id} subscriber`;
  }
}
