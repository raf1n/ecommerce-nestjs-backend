import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import {
  WithdrawMethod,
  WithdrawMethodDocument,
} from "./../../schemas/withdraw_method.schema";
import { Injectable } from "@nestjs/common";
import { CreateWithdrawMethodDto } from "./dto/create-withdraw_method.dto";
import { UpdateWithdrawMethodDto } from "./dto/update-withdraw_method.dto";
import { UtilSlug } from "src/utils/UtilSlug";

@Injectable()
export class WithdrawMethodsService {
  constructor(
    @InjectModel(WithdrawMethod.name)
    private readonly withdrawMethodModel: Model<WithdrawMethodDocument>
  ) {}

  async create(createWithdrawDto: CreateWithdrawMethodDto) {
    createWithdrawDto["slug"] = UtilSlug.getUniqueId(createWithdrawDto.name);
    return await this.withdrawMethodModel.create(createWithdrawDto);
  }

  async findAll() {
    return await this.withdrawMethodModel.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} withdrawMethod`;
  }

  async update(slug: string, updateWithdrawMethodDto: UpdateWithdrawMethodDto) {
    return await this.withdrawMethodModel.findOneAndUpdate(
      { slug: slug },
      updateWithdrawMethodDto,
      { new: true }
    );
  }

  remove(id: number) {
    return `This action removes a #${id} withdrawMethod`;
  }
}
