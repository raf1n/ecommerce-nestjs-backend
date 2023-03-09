import { UtilSlug } from './../../utils/UtilSlug';
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
    createInventoryDto["slug"] = UtilSlug.getUniqueId('stock');

    return this.inventoryModel.create(createInventoryDto);
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
