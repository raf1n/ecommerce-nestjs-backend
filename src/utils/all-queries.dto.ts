import { IsNumber, IsOptional, IsString } from "class-validator";

export class SearchSortDto {
  @IsString()
  @IsOptional()
  sortBy: string;

  // [sortyBy: string]: string;

  @IsString()
  @IsOptional()
  sortType: string;

  @IsString()
  @IsOptional()
  search: string;

  @IsNumber()
  @IsOptional()
  limit: number;

  @IsNumber()
  @IsOptional()
  page: number;
}
