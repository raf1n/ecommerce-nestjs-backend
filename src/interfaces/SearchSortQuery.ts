import { SortOrder } from "mongoose";

// export type JsonValue = string | number | boolean | JsonObject | null
// export type JsonObject = {[Key in string]?: JsonValue}

export interface ISearchSortQuery {
  search: string;
  sort: { [x: string]: SortOrder };
}
