import { Withdraw, WithdrawDocument } from "./../../schemas/withdraw.schema";
import { Injectable } from "@nestjs/common";
import { CreateWithdrawDto } from "./dto/create-withdraw.dto";
import { UpdateWithdrawDto } from "./dto/update-withdraw.dto";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { UtilSlug } from "src/utils/UtilSlug";

@Injectable()
export class WithdrawsService {
  constructor(
    @InjectModel(Withdraw.name)
    private readonly withdrawModel: Model<WithdrawDocument>
  ) {}

  async create(createWithdrawDto: CreateWithdrawDto) {
    createWithdrawDto["slug"] = UtilSlug.getUniqueId(createWithdrawDto.method);
    return await this.withdrawModel.create(createWithdrawDto);
  }

  async findAll() {
    return await this.withdrawModel.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} withdraw`;
  }

  update(id: number, updateWithdrawDto: UpdateWithdrawDto) {
    return `This action updates a #${id} withdraw`;
  }

  remove(id: number) {
    return `This action removes a #${id} withdraw`;
  }
}
