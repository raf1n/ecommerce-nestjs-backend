import { Injectable } from "@nestjs/common";
import { CreateFileUploadDto } from "./dto/create-file-upload.dto";
import { UpdateFileUploadDto } from "./dto/update-file-upload.dto";
import { UtilSlug } from "src/utils/UtilSlug";
import { ProductsService } from "../products/products.service";
import { InjectModel } from "@nestjs/mongoose";
import { Product, ProductDocument } from "src/schemas/product.schema";
import { Model } from "mongoose";
const csvtojson = require("csvtojson");

@Injectable()
export class FileUploadService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>
  ) {}
  async processUploadedFile(file: Express.Multer.File) {
    // Handle the uploaded file here, such as parsing and saving it to the database
    // You can implement your specific logic for handling the Excel file here
    // For example, you can use the xlsx library to parse the Excel file
    try {
      const csvData = file.buffer.toString("utf8");
      const jsonArray = await csvtojson().fromString(csvData);

      const savedProducts = [];

      for (const item of jsonArray) {
        const createProductDto = {
          slug: UtilSlug.getUniqueId(item.productName),
          productName: item.productName,
          catSlug: item.catSlug,
          subCatSlug: item.subCatSlug,
          brandSlug: item.brandSlug,
          price: parseFloat(item.price),
          description: item.description,
          status: item.status || "active",
          imageURL: item.imageURL.split(","), // Assuming imageURL is comma-separated
          offerPrice: parseFloat(item.offerPrice || 0),
          stock: parseFloat(item.stock || 0),
          weight: parseFloat(item.weight || 0),
          seoTitle: item.seoTitle || "",
          seoDescription: item.seoDescription || "",
          isTopProduct:
            item["Highlight (Top/ New/ Best/ Popular/ Featured)"] === "Top",
          isNewArrival:
            item["Highlight (Top/ New/ Best/ Popular/ Featured)"] === "New",
          isBestProduct:
            item["Highlight (Top/ New/ Best/ Popular/ Featured)"] === "Best",
          isFeatured:
            item["Highlight (Top/ New/ Best/ Popular/ Featured)"] ===
            "Featured",
          isPopular:
            item["Highlight (Top/ New/ Best/ Popular/ Featured)"] === "Popular",
        };

        const result = await this.productModel.create(createProductDto);

        if (result) {
          console.log(result);
        }
      }

      return {
        message: "File uploaded and processed successfully",
        savedProducts,
      };
    } catch (error) {
      console.error("Error processing the uploaded file:", error);
      throw new Error("File processing failed");
    }
  }
}
