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
// interface s<T> {
//   [sortBy: string]: T;
//   search: T;
//   sortType: T;
// }
// export class serviceHandler {
//   static async queryHandler<T extends s>(
//     model: Model<T>,
//     query: s<T>
//   ): Promise<Array<T>> {
//     const allDatas = await model
//       .find({ name: new RegExp(query.search, "i") })
//       .sort({ [query.sortBy]: query.sortType });
//     return allDatas;
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
