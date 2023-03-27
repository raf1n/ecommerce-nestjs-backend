import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Review, ReviewDocument } from "src/schemas/review.schema";
import { UtilSlug } from "src/utils/UtilSlug";
import { CreateReviewDto } from "./dto/create-review.dto";
import { UpdateReviewDto } from "./dto/update-review.dto";

@Injectable()
export class ReviewsService {
  constructor(
    @InjectModel(Review.name)
    private readonly reviewModel: Model<ReviewDocument>
  ) {}

  async create(createReviewDto: CreateReviewDto): Promise<Object> {
    const slug = `review_${createReviewDto.product_slug}`;
    createReviewDto["slug"] = UtilSlug.getUniqueId(slug);

    const result = await new this.reviewModel(createReviewDto).save();
    return result;
  }

  async findReview(product_slug: string): Promise<Review[]> {
    return await this.reviewModel.aggregate([
      {
        $match: {
          product_slug,
        },
      },
      {
        $lookup: {
          from: "products",
          localField: "product_slug",
          foreignField: "slug",
          as: "reviewProducts",
        },
      },

      {
        $unwind: "$reviewProducts",
      },
      {
        $lookup: {
          from: "users",
          localField: "user_slug",
          foreignField: "slug",
          as: "user",
        },
      },
      {
        $unwind: "$user",
      },
    ]);
  }

  // ---------------------------------------------

  // admin
  async findAllForAdmin(query: any): Promise<Review[]> {
    let match_value = new RegExp(query.search, "i");
    return await this.reviewModel
      .aggregate([
        {
          $lookup: {
            from: "products",
            localField: "product_slug",
            foreignField: "slug",
            as: "reviewProducts",
          },
        },
        {
          $unwind: "$reviewProducts",
        },
        {
          $lookup: {
            from: "users",
            localField: "user_slug",
            foreignField: "slug",
            as: "user",
          },
        },
        {
          $unwind: "$user",
        },
        {
          $match: {
            "user.fullName": match_value,
          },
        },
      ])
      .sort({ [query.sortBy]: query.sortType });
  }

  // seller
  async findAllForSeller(query: any, seller_slug: string): Promise<Review[]> {
    let match_value = new RegExp(query.search, "i");
    return await this.reviewModel
      .aggregate([
        {
          $lookup: {
            from: "products",
            localField: "product_slug",
            foreignField: "slug",
            as: "reviewProducts",
          },
        },
        {
          $unwind: "$reviewProducts",
        },
        {
          $match: {
            "reviewProducts.seller_slug": seller_slug,
          },
        },
        {
          $lookup: {
            from: "users",
            localField: "user_slug",
            foreignField: "slug",
            as: "user",
          },
        },
        {
          $unwind: "$user",
        },
        {
          $match: {
            "user.fullName": match_value,
          },
        },
      ])
      .sort({ [query.sortBy]: query.sortType });
  }
  // ----------------------------------------------
  async findAll(query: { user_slug: string }) {
    return await this.reviewModel.aggregate([
      { $match: { user_slug: query.user_slug } }, //
      {
        $lookup: {
          from: "products",
          localField: "product_slug",
          foreignField: "slug",
          as: "reviewProducts",
        },
      },
      {
        $unwind: "$reviewProducts",
      },
    ]);
  }
  // ----------------------------------------------
  findOne(slug: string) {
    return this.reviewModel.findOne({ slug });
  }

  async findSingleReviewForSeller(slug: string): Promise<Review[]> {
    const result = await this.reviewModel.aggregate([
      {
        $match: {
          slug: slug,
        },
      },
      {
        $lookup: {
          from: "products",
          localField: "product_slug",
          foreignField: "slug",
          as: "reviewProducts",
        },
      },
      {
        $unwind: "$reviewProducts",
      },

      {
        $lookup: {
          from: "users",
          localField: "user_slug",
          foreignField: "slug",
          as: "user",
        },
      },
      {
        $unwind: "$user",
      },
    ]);
    return result[0];
  }

  // ----------------------------------------------

  // update(id: number, updateReviewDto: UpdateReviewDto) {
  //   return `This action updates a #${id} review update`;
  // }

  async update(slug: string, updateReviewDto: UpdateReviewDto) {
    return await this.reviewModel.findOneAndUpdate({ slug }, updateReviewDto, {
      new: true,
    });
  }

  async delete(slug: string): Promise<Review> {
    return await this.reviewModel.findOneAndDelete({ slug }).exec();
  }

  // remove(id: number) {
  //   return `This action removes a #${id} review remove`;
  // }
}
