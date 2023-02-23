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

<<<<<<< HEAD
  // findAll(slug: string) {
  //   return this.orderModel.find({ user_slug: slug });
  // }

  async findAllCompleted(slug: string, order_status: string) {
=======
  // ------------------------------------------------------------------
  async findAllCompleted(slug: string, delivery_status: string) {
>>>>>>> 417981eb76c809c57342309266fd34cf393db350
    const result = await this.orderModel.find({
      user_slug: slug,
      order_status: new RegExp(order_status, "i"),
    });
    console.log(result);
    return {
      data: result,
      message: "fetched Successfully",
    };
  }
<<<<<<< HEAD

  async findAllOrdersAdmin(query: any) {
    let match_value = new RegExp(query.search, "i");
    console.log(query);

    const allOrdersData = await this.orderModel.aggregate([
      {
        $match: {
          slug: {
            $regex: match_value,
          },
        },
      },
      {
        $sort: {
          [query.sortBy]: query.sortType === "asc" ? 1 : -1,
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "user_slug",
          foreignField: "slug",
          as: "userData",
        },
      },
      {
        $unwind: "$userData",
      },
    ]);

    const filteredOrdersData = await this.orderModel.aggregate([
      {
        $match: {
          slug: {
            $regex: match_value,
          },
          order_status: query.order_status,
        },
      },
      {
        $sort: {
          [query.sortBy]: query.sortType === "asc" ? 1 : -1,
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "user_slug",
          foreignField: "slug",
          as: "userData",
        },
      },
      {
        $unwind: "$userData",
      },
    ]);
    return { allOrdersData, filteredOrdersData };
  }

=======
  // ------------------------------------------------------------------
>>>>>>> 417981eb76c809c57342309266fd34cf393db350
  async findOne(slug: string) {
    return await this.orderModel.findOne({ slug });
  }

  async update(slug: string, updateOrderDto: UpdateOrderDto) {
    const result = await this.orderModel.findOneAndUpdate(
      { slug },
      updateOrderDto,
      { new: true }
    );
    return result;
  }

  async remove(slug: string) {
    return await this.orderModel.deleteOne({ slug });
  }
}
