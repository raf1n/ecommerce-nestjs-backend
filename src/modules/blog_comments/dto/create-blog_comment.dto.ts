import { IsString } from "class-validator";

export class CreateBlogCommentDto {
  @IsString()
  name: string;
  
  @IsString()
  email: string;

  @IsString()
  userSlug: string;

  @IsString()
  avatar: string;
  
  @IsString()
  blogSlug: string;
  
  @IsString()
  comment: string;
}
