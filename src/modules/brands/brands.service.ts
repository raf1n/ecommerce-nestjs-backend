import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Brand, BrandDocument } from 'src/schemas/brand.schema';
import { Model } from 'mongoose';

@Injectable()
export class BrandsService {
  constructor(
    @InjectModel(Brand.name) private brandModel: Model<BrandDocument>,
  ) {}

  async create(createBrandDto: CreateBrandDto) {
    const createdBrand = await this.brandModel.create(createBrandDto)
    // console.log(createdBrand)
    return createdBrand;
  }

  findAll() {
    return `This action returns all brands`;
  }

  findOne(id: number) {
    return `This action returns a #${id} brand`;
  }

  async update(slug: string, updateBrandDto: UpdateBrandDto): Promise<BrandDocument>  {
    // console.log({ slug, updateBrandDto })
    const updatedBrand = await this.brandModel.findOneAndUpdate({slug: slug}, updateBrandDto)
    return updatedBrand;
  }

  async remove(slug: string): Promise<BrandDocument> {
    const deletedBrand = await this.brandModel.findOneAndDelete({ slug: slug})
    return deletedBrand;
  }
}
