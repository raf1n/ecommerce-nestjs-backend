import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from "@nestjs/common";
import { OrdersService } from "./orders.service";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";

@Controller("orders")
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}
  // --------------------
  @Post()
  create(
    @Body()
    createOrderDto: CreateOrderDto
  ) {
    return this.ordersService.create(createOrderDto);
  }
  // --------------------

  // @Get()
  // findAll(@Query() query: { user_slug: string }) {
  //   return this.ordersService.findAll(query.user_slug);
  // }

  @Get()
  findAllCompleted(
    @Query() query: { user_slug: string; delivery_status: string }
  ) {
    return this.ordersService.findAllCompleted(
      query.user_slug,
      query.delivery_status
    );
  }

  // @Get(":id")
  // findOne(@Param("id") id: string) {
  //   return this.ordersService.findOne(+id);
  // }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(+id, updateOrderDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.ordersService.remove(+id);
  }
}
