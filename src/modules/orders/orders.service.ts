import { OrderDocument } from "./../../schemas/order.schema";
import { Injectable } from "@nestjs/common";
import { Order } from "src/schemas/order.schema";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UtilSlug } from "src/utils/UtilSlug";

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name)
    private readonly orderModel: Model<OrderDocument>
  ) {}
  // ------------------post order--------------------- //
  async create(createOrderDto: CreateOrderDto): Promise<Object> {
    const slug = `order_${createOrderDto.user_slug}`;
    createOrderDto["slug"] = UtilSlug.getUniqueId(slug);

    const result = await new this.orderModel(createOrderDto).save();

    if (result) {
      return {
        data: result,
        message: "Order successfull ",
      };
    } else {
      return {
        message: "Order  failed !",
      };
    }
  }

  // ------------------------------------------------------------------
  async findAllCompleted(slug: string, delivery_status: string) {
    const result = await this.orderModel.find({
      user_slug: slug,
      delivery_status: new RegExp(delivery_status, "i"),
    });
    console.log(result);
    return {
      data: result,
      message: "fetched Successfully",
    };
  }
  // ------------------------------------------------------------------
  async findOne(slug: string) {
    return await this.orderModel.findOne({ slug });
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
