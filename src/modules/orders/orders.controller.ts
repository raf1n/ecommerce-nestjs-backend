import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Request,
} from "@nestjs/common";
import { OrdersService } from "./orders.service";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { SearchSortDto } from "src/utils/all-queries.dto";

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
    console.log(query);
    return this.ordersService.findAllCompleted(
      query.user_slug,
      query.delivery_status
    );
  }

  @Get("/admin")
  async findAllAdminProduct(
    @Query() query: SearchSortDto
    // @Request() req: Request
  ) {
    return await this.ordersService.findAllOrdersAdmin(query);
  }

  @Get(":slug")
  findOne(@Param("slug") slug: string) {
    return this.ordersService.findOne(slug);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(+id, updateOrderDto);
  }

  @Delete(":slug")
  remove(@Param("slug") slug: string) {
    return this.ordersService.remove(slug);
  }
}
