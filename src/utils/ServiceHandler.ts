import { Model } from "mongoose";
import { SearchSortDto } from "./all-queries.dto";

// export class serviceHandler {
//   static async queryHandler<T>(
//     model: Model<T>,
//     query: { sortBy: string; search: string; sortType: string }
//   ): Promise<Array<T>> {
//     let sortBy = query.sortBy;
//     const allBrands = await model
//       .find({ name: new RegExp(query.search, "i") })
//       .sort({ sortBy: query.sortType });
//     return allBrands;
//   }
// }
// export class serviceHandler {
//   static async queryHandler<T>(
//     model: Model<T>,
//     query: { search: string; sort: { [key: string]: SortOrder } }
//   ): Promise<Array<T>> {
//     const allBrands = await model
//       .find({ name: new RegExp(query.search, "i") })
//       .sort(query.sort);
//     return allBrands;
//   }
// }

export class serviceHandler {
  static async queryHandler<T>(model: Model<T>, query: any): Promise<Array<T>> {
    const allDatas = await model
      .find({ name: new RegExp(query.search, "i") })
      .sort({ sortBy: query.sortType });
    return allDatas;
  }
}
