import { Model, SortOrder } from "mongoose";
import { ISearchSortQuery } from "src/interfaces/SearchSortQuery";
import { SearchSortDto } from "./all-queries.dto";

export class ServiceHandler {
  static async queryHandler<T1>(
    model: Model<T1>,
    query: ISearchSortQuery
  ): Promise<Array<T1>> {
    const allBrands = await model
      .find({ name: new RegExp(query.search, "i") })
      .sort(query.sort);
    return allBrands;
  }

  // static async queryHandlerOld<T1>(
  //   model: Model<T1>,
  //   query: { sortBy: string; sortType: string; search: string }
  // ): Promise<Array<T1>> {
  //   const sortBy = query.sortBy;
  //   const sortType = query.sortType;
  //   const search = query.search;

  //   const sort = { [sortBy]: sortType };
  //   const allBrands = await model
  //     .find({ name: new RegExp(search, "i") })
  //     .sort(sort);
  //   return allBrands;
  // }
}
