import { PartialType } from "@nestjs/mapped-types";
import { IsString } from "class-validator";
import { CreateBlogCommentDto } from "./create-blog_comment.dto";

export class UpdateBlogCommentDto extends PartialType(CreateBlogCommentDto) {
  @IsString()
  status: "active" | "inactive";
}
