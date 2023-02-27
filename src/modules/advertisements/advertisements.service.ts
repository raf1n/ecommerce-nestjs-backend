import { Injectable } from "@nestjs/common";
import { CreateAdvertisementDto } from "./dto/create-advertisement.dto";
import { UpdateAdvertisementDto } from "./dto/update-advertisement.dto";
import { InjectModel } from "@nestjs/mongoose";
import {
  Advertisement,
  AdvertisementDocument,
} from "src/schemas/advertisement.schema";
import { Model } from "mongoose";

@Injectable()
export class AdvertisementsService {
  constructor(
    @InjectModel(Advertisement.name)
    private advertisementModel: Model<AdvertisementDocument>
  ) {}
  create(createAdvertisementDto: CreateAdvertisementDto) {
    return "This action adds a new advertisement";
  }

  findAll() {
    return `This action returns all advertisements`;
  }

  findOne(slug: string) {
    return `This action returns a #${slug} advertisement`;
  }

  update(slug: string, updateAdvertisementDto: UpdateAdvertisementDto) {
    return;
  }

  remove(slug: string) {
    return `This action removes a #${slug} advertisement`;
  }
}
