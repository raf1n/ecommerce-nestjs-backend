import { Injectable } from "@nestjs/common";
import { CreateReporteditemDto } from "./dto/create-reporteditem.dto";
import { UpdateReporteditemDto } from "./dto/update-reporteditem.dto";
import { InjectModel } from "@nestjs/mongoose";
import {
  ReportedItem,
  ReportedItemDocument,
} from "src/schemas/reported-item.schema";
import { Model } from "mongoose";
import { UtilSlug } from "src/utils/UtilSlug";

@Injectable()
export class ReporteditemsService {
  constructor(
    @InjectModel(ReportedItem.name)
    private readonly ReportedItemModel: Model<ReportedItemDocument>
  ) {}

  async create(createReporteditemDto: CreateReporteditemDto): Promise<Object> {
    const slug = `report_${createReporteditemDto.user_slug}_${createReporteditemDto.product_slug}`;
    createReporteditemDto["slug"] = UtilSlug.getUniqueId(slug);
    const result = await new this.ReportedItemModel(
      createReporteditemDto
    ).save();
    return result;
  }
  findAll() {
    return `This action returns all reporteditems`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reporteditem`;
  }

  update(id: number, updateReporteditemDto: UpdateReporteditemDto) {
    return `This action updates a #${id} reporteditem`;
  }

  remove(id: number) {
    return `This action removes a #${id} reporteditem`;
  }
}
