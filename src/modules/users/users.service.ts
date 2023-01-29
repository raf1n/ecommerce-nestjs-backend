import { User } from './entities/user.entity';
import { Injectable } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDocument } from 'src/schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { LoginUserDto } from './dto/login-user.dto';
import { TokenVerifier } from 'src/utils/TokenVerifier';
import { UtilSlug } from 'src/utils/UtilSlug';
import { JwtService } from '@nestjs/jwt';
const admin = require("firebase-admin");

// const serviceAccount = require('../../utils/ecommerce-3dcd5-firebase-adminsdk-8iryd-a787e6184a.json');
const firebaseParam = {
  "type": "service_account",
  "project_id": "ecommerce-3dcd5",
  "private_key_id": "a787e6184a0cab923957c36b1952599ef3560c5a",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCs9novakIL969t\nVllTCsFhrP7BigImJ5tPF8yXk67zroQupvyPGz9GfwqOpPaS0plugouj83MqXu5n\n23re1VFQ+jJOCdQr4oYaSH0gQzz7GjUAhzHX9oU1LCg20fqPrHAZ0NwNEJVtzNv1\nvcZeKgko5+/h53sSG+3GGSozTjiQMMlzg3qNQ3oHMuEVHNyxBTrUHob+TZkkdE2u\n1eiNjJeTNfhAGYDs282kcv6b8Gu26IMef/7MCM+yTGwe0AMKPBlMTs8WFvhccmPX\nrdjJO0XjRNivS53FdvGDLyR4Pmz2yL3CFuBFta8Qh+GAgPgaCBPScLIY06XdFHmF\ngcUV3ETPAgMBAAECggEABXJ9xqCCE/5o9/iQN51PGdRo8Y93Idx9d7A4MU3lZKdK\nYm2/5oHlLEM0AeoQGe+oBWL3IuK37c2vlHXFGN9/AB3hF7QXiopHzuwZhLqZYQ8i\nPDIFz9djupj5a0CRs5SqsyVwyLiM/DhHdSXU6YJJZ5BmbabsqVVX17VTLup3vZK+\neib15dZLtGS5Vr7qnigSRbi5WhR6oNUFZRqZUBGm16NAGpsprXXqq/sv3sjF35o7\nWo7/j+rgAqJrZHZTo9vzPmy7cFkjYFqBQ2JfdvEVUtftv0eNOEJM+tQ4UY0TXmpc\ne6knbI4e7kKQ+W7YbgaPm1bHv+DnFuOHIURq9r/YgQKBgQDjZJ19c2XkAMH5o6Y/\nuNA+ebT3eb2zawQg4EpyclHtYjqviIfHnaEZEUgdBXzXN+NIxRz0avqKQ3UMXKhA\njHUZFqaTZ1b1FeU15TEkfpKRghlS+k9JlDodPN0IpJDSdAA/51XLzCWLfIboMjCm\nIIsF9ArvIUWBvNmekwhSQlRZgwKBgQDCuOP/e5P37JbkCT7gzjLytFXUoJ00cgox\ngSZyzHlPvKEFgpMtUz+mcrBbY8Rd4D9nZf6PeY9Fvet2uAUEs2jZN6UGdp3QfGVJ\n/fFvqdjLtNwRtlAcpmHiha0BUAhHuKVnRzPMUyt9VFBy2zw+hIdFMvBLEkPZu7Av\nr43CzjihxQKBgEHAKCHMKlwhM/WBMmMeh2hpPMCKPSYR/aGb+Sraj4H6c0mqSsiX\ndauP6bAqlAyPJnM2O8cY39T26HNon2X6tylH+WaJ7QT1Dc/ls63/w1W7rqLlqeN2\nrs8heDA1lYKk9CWGOLKzFvAcU830JUkEA+72v+qhTj3TY4GMtk1CzK0NAoGBAIhg\nje7FUmD1psiXYR55zF0HyIVe6DtvE4yQc6k7ZEtgRTZiuUmpYI7nDHU1braA9Gcq\nnBtIe/vQhDVltL4SGYDo4/+e2/DE7vvfi1U1k804IlmVYo5uSWgpT33325S/0bh/\nuduE9JSWlLGcspjmoQbqIjmx1SuNtFvxjEu/uxIxAoGBAL4zZukDIGVYFqJKggC0\n71skJhLQHMtqcJkM7GpO+Sm2H2poVRUxehRS2RIhZJ5TozfrkEIYHvoCxM/IRrtS\nuna3Ym/jIEsU58dXVEPFLz+ipCjGYGK945wFrTmENlnhzTEj/2oj17H0VSDdkffK\n/CwTASigJuUuRTRh3ENUXpaW\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-8iryd@ecommerce-3dcd5.iam.gserviceaccount.com",
  "client_id": "104103893159513889984",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-8iryd%40ecommerce-3dcd5.iam.gserviceaccount.com"
}
admin.initializeApp({
  credential: admin.credential.cert(firebaseParam)
});

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    // @InjectModel(Portfolio.name) private portfolioModel: Model<PortfolioDocument>,
    // @InjectModel(Picture.name) private pictureModel: Model<PictureDocument>,
    private jwtService: JwtService
    // eslint-disable-next-line no-empty-function
  ) { }
  async register(registerUserDto: RegisterUserDto) {
    const portfolio = await this.userModel.create({
      firstName: registerUserDto.firstName,
      lastName: registerUserDto.lastName,
      email: registerUserDto.email,
      // password: registerUserDto.password,
      userType: registerUserDto.userType
    });
    return portfolio;
  }

  // async login(loginUserDto: LoginUserDto) { 
  //   console.log(loginUserDto)
  //   const user = await this.userModel.findOne({ email: loginUserDto.email,password:loginUserDto.password });
  //   // console.log(user)
  //   if (user) {
  //     return 'LoggedIn';
  //   }
  //   else {
  //     return 'Invalid Username or Password'
  //   }

  // }

  async login(loginUserDto: Partial<LoginUserDto>): Promise<{ slug: string | undefined, access_token: string | null, userId?: string | null, role:string|null }> {
    console.log('loginUserDto', loginUserDto);
    const { token, tokenType } = loginUserDto;
    let isVerified = false;
    const accessToken = null;

    if (tokenType == "facebook") {
      isVerified = await TokenVerifier.verifyFacebookToken(token);
    }
    else if (tokenType == "google") {
      isVerified = await TokenVerifier.verifyGoogleToken(token);
      console.log('is verify google', isVerified)
    }
    else if (tokenType == "email") {
      try {
        const decodedUser = await admin.auth().verifyIdToken(token);// 73-9 token verify hole bhitorer data gulo return korbe
        if (decodedUser?.uid) {
          isVerified = true
        }
      }
      catch {

      }
    }

    // console.log(`isVerified: ${isVerified}`);

    if (isVerified) {
      const { email, fullName, role } = loginUserDto;

      console.log(`email: ${email}`);
      console.log(`fullName: ${fullName}`);
      console.log(`role: ${role}`);

      const user = await this.userModel.findOne({ email: email });

      if (user?.avatar) {
        delete loginUserDto.avatar
      }

      if (user?.fullName) {
        delete loginUserDto.fullName
      }

      if (user) {
        loginUserDto['slug'] = user.slug
      }

      else {
        loginUserDto['slug'] = UtilSlug.getUniqueId(fullName)
      }


      const creatUser = await this.userModel.findOneAndUpdate(
        { email: email },
        {
          $set: {
            ...loginUserDto,
          }
        },
        { upsert: true, new: true }
      );
      const accessToken = this.jwtService.sign({
        _id: creatUser._id as string,
        email: creatUser.email,
      });

      return {
        slug: loginUserDto['slug'],
        access_token: accessToken,
        userId: creatUser._id as string,
        role: creatUser.role as string
      };
    }

    return {
      slug: loginUserDto['slug'],
      access_token: accessToken,
      role: null
    };
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
