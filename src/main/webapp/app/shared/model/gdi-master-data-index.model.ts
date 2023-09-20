export interface IGdiMasterDataIndex {
  id?: number;
  entityName?: string;
  databaseName?: string;
  businessDescription?: string | null;
}

export const defaultValue: Readonly<IGdiMasterDataIndex> = {};
