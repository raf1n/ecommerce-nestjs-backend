import {
  BlogComment,
  BlogCommentSchema,
} from "./../../schemas/blog_comment.schema";
import { Module } from "@nestjs/common";
import { BlogCommentsService } from "./blog_comments.service";
import { BlogCommentsController } from "./blog_comments.controller";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BlogComment.name, schema: BlogCommentSchema },
    ]),
  ],
  controllers: [BlogCommentsController],
  providers: [BlogCommentsService],
})
export class BlogCommentsModule {}
