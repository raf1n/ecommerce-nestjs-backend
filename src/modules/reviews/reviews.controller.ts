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
import { ReviewsService } from "./reviews.service";
import { CreateReviewDto } from "./dto/create-review.dto";
import { UpdateReviewDto } from "./dto/update-review.dto";
import { Review } from "src/schemas/review.schema";
import { SearchSortDto } from "src/utils/all-queries.dto";

@Controller("reviews")
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post()
  create(@Body() createReviewDto: CreateReviewDto) {
    return this.reviewsService.create(createReviewDto);
  }
  // ---------------------------------
  @Get()
  findAll(@Query() query: { user_slug: string }) {
    return this.reviewsService.findAll(query);
  }

  @Get("/reviewProducts/:product_slug")
  findReview(@Param("product_slug") product_slug: string) {
    return this.reviewsService.findReview(product_slug);
  }

  // ---------------------------------
  @Get("/findAllForAdmin")
  findAllForAdmin(@Query() query: SearchSortDto, @Request() req: Request) {
    return this.reviewsService.findAllForAdmin(query);
  }

  // reviews of seller products

  @Get("/findAllForSeller/:seller_slug")
  findAllForSeller(
    @Query() query: SearchSortDto,
    @Param("seller_slug") seller_slug: string
  ) {
    return this.reviewsService.findAllForSeller(query, seller_slug);
  }

  // ---------------------------------
  @Get(":slug")
  findOne(@Param("slug") slug: string) {
    return this.reviewsService.findSingleReviewForSeller(slug);
  }

  @Patch(":slug")
  update(
    @Param("slug") slug: string,
    @Body() updateReviewDto: UpdateReviewDto
  ) {
    return this.reviewsService.update(slug, updateReviewDto);
  }

  // @Patch(":id")
  // update(@Param("id") id: string, @Body() updateReviewDto: UpdateReviewDto) {
  //   return this.reviewsService.update(+id, updateReviewDto);
  // }

  @Delete(":slug")
  delete(@Param("slug") slug: string) {
    return this.reviewsService.delete(slug);
  }

  // @Delete(":id")
  // remove(@Param("id") id: string) {
  //   return this.reviewsService.remove(+id);
  // }
}
