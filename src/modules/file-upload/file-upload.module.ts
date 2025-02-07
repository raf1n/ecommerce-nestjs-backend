import { Module } from "@nestjs/common";
import { FileUploadService } from "./file-upload.service";
import { FileUploadController } from "./file-upload.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Product, ProductSchema } from "../../../src/schemas/product.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    // ...
  ],
  controllers: [FileUploadController],
  providers: [FileUploadService],
})
export class FileUploadModule {}
