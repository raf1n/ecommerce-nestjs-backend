import { Injectable } from "@nestjs/common";
import { CreateFlashSaleDto } from "./dto/create-flash_sale.dto";
import { UpdateFlashSaleDto } from "./dto/update-flash_sale.dto";
import { InjectModel } from "@nestjs/mongoose";
import { FlashSale, FlashSaleDocument } from "src/schemas/flash_sale.schema";
import { Model } from "mongoose";
import { UtilSlug } from "src/utils/UtilSlug";
import { SearchSortDto } from "src/utils/all-queries.dto";

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

  findAll(query: SearchSortDto) {
    return this.flashSaleModel.aggregate([
      {
        $lookup: {
          from: "products",
          localField: "product_slug",
          foreignField: "slug",
          as: "productsData",
          pipeline: [
            {
              $match: {
                productName: {
                  $regex: "(?i)" + query.search + "(?-i)",
                },
              },
            },
            {
              $sort: {
                productName: query.sortType === "asc" ? 1 : -1,
              },
            },
          ],
        },
      },
      {
        $unwind: "$productsData",
      },
      {
        $sort: {
          [query.sortBy]: query.sortType === "asc" ? 1 : -1,
        },
      },
    ]);
  }

  findOne(slug: string) {
    return this.flashSaleModel.findOne({ slug });
  }

  update(slug: string, updateFlashSaleDto: UpdateFlashSaleDto) {
    return this.flashSaleModel.findOneAndUpdate({ slug }, updateFlashSaleDto, {
      new: true,
    });
  }

  remove(slug: string) {
    return this.flashSaleModel.findOneAndDelete({ slug });
  }
}
