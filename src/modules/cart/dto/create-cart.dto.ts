export class CreateCartDto {
  slug: string;
  product_slug: Array<string>;
  quantity: number;
  buyer_slug: string;
  create_date: string;
}