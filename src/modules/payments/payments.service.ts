import { Injectable } from "@nestjs/common";
import { CreatePaymentDto } from "./dto/create-payment.dto";
import { UpdatePaymentDto } from "./dto/update-payment.dto";

import { UtilSlug } from "src/utils/UtilSlug";
@Injectable()
export class PaymentsService {
  // private sslcommerz: SSLCommerz;
  // constructor(private paymentService: PaymentsService) {
  //   this.sslcommerz = new SSLCommerz({
  // store_id: process.env.STORE_ID,
  // store_passwd: process.env.STORE_PASSWORD,
  //     isSandboxMode: true, // Set to false in production
  //   });
  // }
  // async initiatePayment(
  //   paymentDto: CreatePaymentDto
  // ): Promise<PaymentResponseDto> {
  //   const order = await this.orderService.createOrder(payment);
  //   const transactionId = UtilSlug.getUniqueId();
  //   const sslcommerzParams = {
  //     total_amount: payment.amount,
  //     currency: "BDT",
  //     tran_id: transactionId,
  //     // success_url: `${environment.baseUrl}/payment/success`,
  //     // fail_url: `${environment.baseUrl}/payment/failure`,
  //     // cancel_url: `${environment.baseUrl}/payment/cancel`,
  //     // ipn_url: `${environment.baseUrl}/payment/ipn`,
  //     shipping_method: "NO",
  //     product_category: "Ecommerce",
  //     product_profile: "general",
  //     cus_name: payment.name,
  //     cus_email: payment.email,
  //     cus_add1: payment.address,
  //     cus_city: payment.city,
  //     cus_country: "Bangladesh",
  //     cus_phone: payment.phone,
  //     cus_state: payment.state,
  //     shipping_city: payment.city,
  //     shipping_country: "Bangladesh",
  //     shipping_state: payment.state,
  //     billing_address: payment.address,
  //     billing_city: payment.city,
  //     billing_country: "Bangladesh",
  //     billing_name: payment.name,
  //     billing_phone: payment.phone,
  //     billing_state: payment.state,
  //   };

  //   const response = await this.sslcommerz.initiateTransaction(
  //     sslcommerzParams
  //   );

  //   if (response && response.status === "SUCCESS") {
  //     return {
  //       status: "SUCCESS",
  //       redirectUrl: response.GatewayPageURL,
  //     };
  //   } else {
  //     return {
  //       status: "FAILED",
  //       errorMessage: "Unable to initiate payment",
  //     };
  //   }
  // }

  findAll() {
    return `This action returns all payments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} payment`;
  }

  update(id: number, updatePaymentDto: UpdatePaymentDto) {
    return `This action updates a #${id} payment`;
  }

  remove(id: number) {
    return `This action removes a #${id} payment`;
  }
}
