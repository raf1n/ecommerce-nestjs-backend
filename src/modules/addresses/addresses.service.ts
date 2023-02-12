import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { AddressDocument } from "src/schemas/address.schema";
import { CreateAddressDto } from "./dto/create-address.dto";
import { UpdateAddressDto } from "./dto/update-address.dto";
import { Address } from "./entities/address.entity";

@Injectable()
export class AddressesService {
  constructor(
    @InjectModel(Address.name)
    private readonly addressModel: Model<AddressDocument>
  ) {}

  async create(createAddressDto: CreateAddressDto): Promise<object> {
    const result = await new this.addressModel(createAddressDto).save();
    if (result) {
      return { message: "Success" };
    }
    // return "This action adds a new address";
  }

  async findAll(): Promise<Address[]> {
    return await this.addressModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} address`;
  }

  update(id: number, updateAddressDto: UpdateAddressDto) {
    return `This action updates a #${id} address`;
  }

  async remove(slug: string): Promise<Address> {
    return await this.addressModel.findOneAndDelete({ slug }).exec();
  }
}
