import { IsNumber, IsOptional, IsString } from "class-validator";

export class SearchSortDto {
  @IsString()
  sortBy: string;

  @IsString()
  sortType: string;
  
  @IsString()
  search: string;
  
  @IsNumber()
  @IsOptional()
  limit: number;
  
  @IsNumber()
  @IsOptional()
  page: number;
}