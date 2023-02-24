import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { Query, Request } from "@nestjs/common/decorators";
import { SearchSortDto } from "src/utils/all-queries.dto";
import { CouponService } from "./coupon.service";
import { CreateCouponDto } from "./dto/create-coupon.dto";
import { UpdateCouponDto } from "./dto/update-coupon.dto";

@Controller("coupon")
export class CouponController {
  constructor(private readonly couponService: CouponService) {}

  @Post()
  create(@Body() createCouponDto: CreateCouponDto) {
    console.log(createCouponDto);
    return this.couponService.create(createCouponDto);
  }

  @Get("/admin")
  async findAllAdminCoupons(
    @Query() query: SearchSortDto,
    @Request() req: Request
  ) {
    console.log(query);
    return await this.couponService.findAllAdminCoupons(query);
  }

  // @Get()
  // findAll() {
  //   return this.couponService.findAll();
  // }

  @Get(":slug")
  findOne(@Param("slug") slug: string) {
    return this.couponService.findOne(slug);
  }

  @Patch(":slug")
  update(
    @Param("slug") slug: string,
    @Body() updateCouponDto: UpdateCouponDto
  ) {
    return this.couponService.update(slug, updateCouponDto);
  }

  @Delete(":slug")
  delete(@Param("slug") slug: string) {
    return this.couponService.delete(slug);
  }

  // @Delete(":id")
  // remove(@Param("id") id: string) {
  //   return this.couponService.remove(+id);
  // }
}
