import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Review, ReviewDocument } from "src/schemas/review.schema";
import { CreateReviewDto } from "./dto/create-review.dto";
import { UpdateReviewDto } from "./dto/update-review.dto";

@Injectable()
export class ReviewsService {
  constructor(
    @InjectModel(Review.name)
    private readonly ReviewModal: Model<ReviewDocument>
  ) {}

  async create(createReviewDto: CreateReviewDto): Promise<Object> {
    const result = await new this.ReviewModal(createReviewDto).save();
    return result;
  }

  findAll() {
    return `This action returns all reviews`;
  }

  findOne(id: number) {
    return `This action returns a #${id} review`;
  }

  update(id: number, updateReviewDto: UpdateReviewDto) {
    return `This action updates a #${id} review`;
  }

  remove(id: number) {
    return `This action removes a #${id} review`;
  }
}
