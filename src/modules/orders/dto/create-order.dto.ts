export class CreateOrderDto {
  slug: string;
  buyer_slug: string;
  product_list: Array<string>;
  billing_address: object;
  shipping_address: object;
  order_status: string;
  placement_date: string;
  checkout_discount: number;
  shipping_cost: number;
}
