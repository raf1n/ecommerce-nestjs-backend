import { Model } from "mongoose";
import { SearchSortDto } from "./all-queries.dto";

export class serviceHandler {
  static async queryHandler<T1>(
    model: Model<T1>,
    query: any
  ): Promise<Array<T1>> {
    const allBrands = await model
      .find({ name: new RegExp(query.search, "i") })
      .sort({ [query.sortBy]: query.sortType });
    return allBrands;
  }
}
