import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from "@nestjs/common";
import { FileUploadService } from "./file-upload.service";
import { CreateFileUploadDto } from "./dto/create-file-upload.dto";
import { UpdateFileUploadDto } from "./dto/update-file-upload.dto";
import { FileInterceptor } from "@nestjs/platform-express/multer"; // Import the FileInterceptor
import { Express } from "express";
import { Multer } from "multer";
type File = Express.Multer.File;

@Controller("file-upload")
export class FileUploadController {
  constructor(private readonly fileUploadService: FileUploadService) {}

  @Post("upload")
  @UseInterceptors(FileInterceptor("file"))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.fileUploadService.processUploadedFile(file);
  }

  // Existing endpoints (create, findAll, findOne, update, remove) can remain as they are
  // ...
}
