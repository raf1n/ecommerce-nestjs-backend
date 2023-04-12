// import { Injectable } from "@nestjs/common";
// import { google } from "googleapis";
// import { OAuth2Client } from "google-auth-library";

// @Injectable()
// export class GoogleService {
//   private readonly oAuth2Client: OAuth2Client;
//   private readonly people: any;

//   constructor() {
//     // Set up OAuth2 client
//     this.oAuth2Client = new google.auth.OAuth2(
//       process.env.GOOGLE_CLIENT_ID,
//       process.env.GOOGLE_CLIENT_SECRET,
//       process.env.GOOGLE_REDIRECT_URI
//     );

//     // Set up People API client
//     this.people = google.people({
//       version: "v1",
//       auth: this.oAuth2Client,
//     });
//   }

//   getAuthorizationUrl(): string {
//     const scopes = ["https://www.googleapis.com/auth/userinfo.email"];
//     const url = this.oAuth2Client.generateAuthUrl({
//       access_type: "offline",
//       scope: scopes,
//     });
//     return url;
//   }

//   async checkEmailExists(email: string): Promise<boolean> {
//     const response = await this.people.people.searchContacts({
//       query: email,
//       readMask: "emailAddresses",
//     });

//     const contacts = response.data.results || [];

//     return contacts.length > 0;
//   }

//   async authenticate(code: string): Promise<string> {
//     const { tokens } = await this.oAuth2Client.getToken(code);
//     this.oAuth2Client.setCredentials(tokens);

//     return tokens.access_token;
//   }
// }
