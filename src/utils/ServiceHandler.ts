import { Model, SortOrder } from "mongoose";
import { SearchSortDto } from "./all-queries.dto";
import { ISearchSortQuery } from "src/interfaces/SearchSortQuery";

export class ServiceHandler {
  static async queryHandler<T1>(
    model: Model<T1>,
    query: ISearchSortQuery,
    find?: object
  ): Promise<Array<T1>> {
    const allBrands = await model
      .find({ name: new RegExp(query.search, "i"), ...find })
      .sort(query.sort);
    return allBrands;
  }
}
