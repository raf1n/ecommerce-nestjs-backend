import { IsString, IsNumber, MaxLength, Min, Max } from "class-validator";

export class CreateWithdrawDto {
  // @IsString()
  // @MaxLength(50)
  // name: string;

  // @IsNumber()
  // @Min(1000)
  // min: number;

  // @IsNumber()
  // @Min(0)
  // @Max(500000)
  // max: number;

  // @IsNumber()
  // charge: number;

  // @IsString()
  // @MaxLength(200)
  // description: string;

  information: string;
  method: string;
  amount: number;
  seller_slug: string;
}
