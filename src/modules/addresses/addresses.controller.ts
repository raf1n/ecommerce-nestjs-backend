import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { Put } from "@nestjs/common/decorators";
import { AddressesService } from "./addresses.service";
import { CreateAddressDto } from "./dto/create-address.dto";
import { UpdateAddressDto } from "./dto/update-address.dto";

@Controller("addresses")
export class AddressesController {
  constructor(private readonly addressesService: AddressesService) {}

  @Post()
  create(@Body() createAddressDto: CreateAddressDto) {
    return this.addressesService.create(createAddressDto);
  }

  @Get(":email")
  findAll(@Param("email") email: string) {
    return this.addressesService.findAll(email);
  }

  // @Get(":id")
  // findOne(@Param("id") id: string) {
  //   return this.addressesService.findOne(+id);
  // }

  @Put(":slug")
  update(
    @Param("slug") slug: string,
    @Body() updateAddressDto: UpdateAddressDto
  ) {
    return this.addressesService.update(slug, updateAddressDto);
  }

  @Delete(":slug")
  remove(@Param("slug") slug: string) {
    return this.addressesService.remove(slug);
  }
}
