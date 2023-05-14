import { Injectable } from "@nestjs/common";
//@ts-ignore
import * as mailgun from "mailgun-js";

@Injectable()
export class MailgunService {
  private mg;

  constructor() {
    this.mg = mailgun({
      apiKey: "1b0443097040bff968cb6f882e72b1f9-2cc48b29-4499d1a0",
      domain: "sandbox890350345a1e4492be3e64fb011df396.mailgun.org",
    });
  }

  sendEmail(data) {
    return this.mg.messages().send(data);
  }
}
