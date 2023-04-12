// import { Controller, Get, Redirect, Req } from "@nestjs/common";
// import { Request } from "express";
// import { GoogleService } from "./googleService.service";

// @Controller("api/auth/google")
// export class AuthController {
//   constructor(private readonly googleService: GoogleService) {}

//   @Get()
//   @Redirect()
//   async redirectToGoogleAuth() {
//     const url = this.googleService.getAuthorizationUrl();
//     return { url };
//   }

//   @Get("callback")
//   @Redirect("/")
//   async handleGoogleAuthCallback(@Req() req: Request) {
//     const code = req.query.code as string;
//     await this.googleService.authenticate(code);
//   }
// }
