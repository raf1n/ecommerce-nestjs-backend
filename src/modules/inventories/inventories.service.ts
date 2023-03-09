import { Injectable } from "@nestjs/common";
import { CreateInventoryDto } from "./dto/create-inventory.dto";
import { UpdateInventoryDto } from "./dto/update-inventory.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Inventory, InventoryDocument } from "src/schemas/inventory.schema";
import { Model } from "mongoose";

@Injectable()
export class InventoriesService {
  constructor(
    @InjectModel(Inventory.name)
    private readonly inventoryModel: Model<InventoryDocument>
  ) {}
  create(createInventoryDto: CreateInventoryDto) {
    return this.inventoryModel.create(createInventoryDto);
  }

  findAll() {
    return this.inventoryModel.find();
  }

  findOne(slug: string) {
    return this.inventoryModel.findOne({ slug });
  }

  update(slug: string, updateInventoryDto: UpdateInventoryDto) {
    return this.inventoryModel.findOneAndUpdate({ slug }, updateInventoryDto, {
      new: true,
    });
  }

  remove(slug: string) {
    return this.inventoryModel.deleteOne({ slug });
  }
}
