import { UtilSlug } from "./../../utils/UtilSlug";
import { Injectable } from "@nestjs/common";
import { CreateInventoryDto } from "./dto/create-inventory.dto";
import { UpdateInventoryDto } from "./dto/update-inventory.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Inventory, InventoryDocument } from "src/schemas/inventory.schema";
import { Model } from "mongoose";
import { Product, ProductDocument } from "src/schemas/product.schema";

@Injectable()
export class InventoriesService {
  constructor(
    @InjectModel(Inventory.name)
    private readonly inventoryModel: Model<InventoryDocument>,
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>
  ) {}
  async create(createInventoryDto: CreateInventoryDto) {
    createInventoryDto["slug"] = UtilSlug.getUniqueId("stock");

    await this.productModel.findOneAndUpdate(
      { slug: createInventoryDto.product_slug },
      {
        $inc: {
          stock: createInventoryDto.quantity,
        },
      }
    );

    return await this.inventoryModel.create(createInventoryDto);
  }

  findAll() {
    return `This action returns all inventories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} inventory`;
  }

  update(id: number, updateInventoryDto: UpdateInventoryDto) {
    return `This action updates a #${id} inventory`;
  }

  remove(id: number) {
    return `This action removes a #${id} inventory`;
  }
}
