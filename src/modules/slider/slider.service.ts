import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Slider, SliderDocument } from "src/schemas/slider.schema";
import { UtilSlug } from "src/utils/UtilSlug";
import { CreateSliderDto } from "./dto/create-slider.dto";
import { UpdateSliderDto } from "./dto/update-slider.dto";

@Injectable()
export class SliderService {
  constructor(
    @InjectModel(Slider.name)
    private readonly sliderModel: Model<SliderDocument>
  ) {}
  // create(createSliderDto: CreateSliderDto) {
  //   return "This action adds a new slider";
  // }

  async create(createSliderDto: CreateSliderDto): Promise<Object> {
    const slug = `order_${createSliderDto.slug}`;
    createSliderDto["slug"] = UtilSlug.getUniqueId(slug);

    const result = await new this.sliderModel(createSliderDto).save();

    if (result) {
      return {
        data: result,
        message: "Order successfull ",
      };
    } else {
      return {
        message: "Order  failed !",
      };
    }
  }

  findAll() {
    return `This action returns all slider`;
  }

  findOne(id: number) {
    return `This action returns a #${id} slider`;
  }

  update(id: number, updateSliderDto: UpdateSliderDto) {
    return `This action updates a #${id} slider`;
  }

  remove(id: number) {
    return `This action removes a #${id} slider`;
  }
}
