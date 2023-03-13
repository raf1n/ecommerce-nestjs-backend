import { Injectable } from "@nestjs/common";
import { CreateFlashSaleDto } from "./dto/create-flash_sale.dto";
import { UpdateFlashSaleDto } from "./dto/update-flash_sale.dto";
import { InjectModel } from "@nestjs/mongoose";
import { FlashSale, FlashSaleDocument } from "src/schemas/flash_sale.schema";
import { Model } from "mongoose";
import { UtilSlug } from "src/utils/UtilSlug";

@Injectable()
export class FlashSaleService {
  constructor(
    @InjectModel(FlashSale.name)
    private readonly flashSaleModel: Model<FlashSaleDocument>
  ) {}
  create(createFlashSaleDto: CreateFlashSaleDto) {
    return this.flashSaleModel.create({
      slug: UtilSlug.getUniqueId(createFlashSaleDto.product_slug),
      product_slug: createFlashSaleDto.product_slug,
      status: createFlashSaleDto.status,
    });
  }

  findAll() {
    return this.flashSaleModel.find();
  }

  findOne(slug: string) {
    return this.flashSaleModel.findOne({ slug });
  }

  update(slug: string, updateFlashSaleDto: UpdateFlashSaleDto) {
    return `This action updates a #${slug} flashSale`;
  }

  remove(slug: string) {
    return this.flashSaleModel.findOneAndDelete({ slug });
  }
}
