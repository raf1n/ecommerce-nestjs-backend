import { OrderDocument } from "./../../schemas/order.schema";
import { Injectable } from "@nestjs/common";
import { Order } from "src/schemas/order.schema";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UtilSlug } from "src/utils/UtilSlug";
import { Inventory, InventoryDocument } from "src/schemas/inventory.schema";
import { Product, ProductDocument } from "src/schemas/product.schema";
import * as SSLCommerz from "sslcommerz-nodejs";

@Injectable()
export class OrdersService {
  private sslcommerz: SSLCommerz;

  constructor(
    @InjectModel(Order.name)
    private readonly orderModel: Model<OrderDocument>,
    @InjectModel(Inventory.name)
    private readonly inventoryModel: Model<InventoryDocument>,
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>
  ) {
    this.sslcommerz = new SSLCommerz({
      store_id: process.env.STORE_ID,
      store_passwd: process.env.STORE_PASSWORD,
      isSandboxMode: true, // Set to false in production
    });
  }

  // ------------------post order--------------------- //
  async create(createOrderDto: CreateOrderDto): Promise<Object> {
    const slug = `order_${createOrderDto.user_slug}`;
    createOrderDto["slug"] = UtilSlug.getUniqueId(slug);

    const sslcommerzParams = {
      total_amount: createOrderDto.subTotal,
      currency: "BDT",
      tran_id: UtilSlug.getUniqueId("transaction"),
      success_url: `${process.env.PORT}/payment/success`,
      fail_url: `${process.env.PORT}/payment/failure`,
      cancel_url: `${process.env.PORT}/payment/cancel`,
      ipn_url: `${process.env.PORT}/payment/ipn`,
      shipping_method: "NO",
      product_name: "Order Payment",
      product_category: "Ecommerce",
      product_profile: "general",
      cus_name: createOrderDto.user_name,
      cus_email: createOrderDto.user_email,
      cus_add1: createOrderDto.address.address,
      cus_city: createOrderDto.address.city,
      cus_country: "Bangladesh",
      cus_phone: createOrderDto.user_phone,
      cus_state: createOrderDto.address.state,
      shipping_city: createOrderDto.address.city,
      shipping_country: "Bangladesh",
      shipping_state: createOrderDto.address.state,
      billing_address: createOrderDto.address.address,
      billing_city: createOrderDto.address.city,
      billing_country: "Bangladesh",
      billing_name: createOrderDto.user_name,
      billing_phone: createOrderDto.user_phone,
      billing_state: createOrderDto.address.state,
    };
    const response = await this.sslcommerz.init_transaction(sslcommerzParams);

    if (response && response.status === "SUCCESS") {
      const result = await new this.orderModel(createOrderDto).save();

      const stockProducts = createOrderDto.product_list.map(
        (data: { slug: string; quantity: number; type: "stockOut" }) => {
          let p = {
            product_slug: data.slug,
            quantity: data.quantity,
            type: "stockOut",
          };

          this.productModel.findOneAndUpdate(
            { slug: data.slug },
            {
              $inc: {
                stock: -data.quantity,
              },
            }
          );
          return p;
        }
      );

      this.inventoryModel.create(stockProducts);
      if (result) {
        console.log(response.GatewayPageURL);
        return {
          data: response.GatewayPageURL,
          message: "Order successfull ",
        };
      } else {
        return {
          message: "Order  failed !",
        };
      }
    } else {
      return {
        status: "FAILED",
        errorMessage: "Unable to initiate payment",
      };
    }

    // const stockUpdate = createOrderDto.product_list.map(
    //   (data: { slug: string; stock: number }) => {
    //     console.log(data);
    //   }
    // );
  }

  // findAll(slug: string) {
  //   return this.orderModel.find({ user_slug: slug })
  // }

  async findAllCompleted(slug: string, order_status: string) {
    const result = await this.orderModel.find({
      user_slug: slug,
      order_status: new RegExp(order_status, "i"),
    });

    return {
      data: result,
      message: "fetched Successfully",
    };
  }

  // ----------------------------------------------
  // async findAll(delivery_status: string): Promise<Order[]> {
  //   return await this.orderModel.find({ delivery_status });
  // }

  // ------------------------------------------------------------------

  async findAllOrdersAdmin(query: any) {
    let match_value = new RegExp(query.search, "i");

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
