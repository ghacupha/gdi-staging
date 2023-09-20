export interface IMoratoriumItem {
  id?: number;
  moratoriumItemTypeCode?: string;
  moratoriumItemType?: string;
  moratoriumTypeDetails?: string | null;
}

export const defaultValue: Readonly<IMoratoriumItem> = {};
