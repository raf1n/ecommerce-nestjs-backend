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

  // -----------------------------------------------------
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
<<<<<<< HEAD

  @Get("/admin")
  async findAllAdminProduct(
    @Query() query: SearchSortDto
    // @Request() req: Request
  ) {
    return await this.ordersService.findAllOrdersAdmin(query);
  }

=======
  // ------------------------------------------------------
>>>>>>> 417981eb76c809c57342309266fd34cf393db350
  @Get(":slug")
  findOne(@Param("slug") slug: string) {
    return this.ordersService.findOne(slug);
  }

  @Patch(":slug")
  update(@Param("slug") slug: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(slug, updateOrderDto);
  }

  @Delete(":slug")
  remove(@Param("slug") slug: string) {
    return this.ordersService.remove(slug);
  }
}
