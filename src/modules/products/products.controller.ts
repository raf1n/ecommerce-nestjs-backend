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
import { ProductsService } from "./products.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { QueryDto } from "./dto/query.dto";

@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  async findAll(@Query() queries: QueryDto, @Request() req: Request) {
    return await this.productsService.findAll(queries);
  }

  @Get(":slug")
  findOne(@Param("slug") slug: string) {
    return this.productsService.findOne(slug);
  }

  @Patch(":slug")
  update(
    @Param("slug") slug: string,
    @Body() updateProductDto: UpdateProductDto
  ) {
    return this.productsService.update(slug, updateProductDto);
  }

  @Delete(":slug")
  delete(@Param("slug") slug: string) {
    return this.productsService.delete(slug);
  }
}
