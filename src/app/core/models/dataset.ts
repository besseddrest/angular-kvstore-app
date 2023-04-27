import { Admins } from "./admins";
import { Clusters } from "./clusters";
import { Statuses } from "./statuses";
import { StorageTypes } from "./storage_types";

export interface Dataset {
  id: number,
  name: string,
  owner: string,
  team: string,
  description: string,
  storage_type: StorageTypes,
  qps: {
    get: number | null,
    set?: number | null,
    delete?: number | null,
  },
  is_pii: boolean,
  review_status: Statuses | null,
  partitions: number | null,
  cluster: Clusters,
  reviewed_by: Admins | null,
}