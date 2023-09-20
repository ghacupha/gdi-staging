export interface IExecutiveCategoryType {
  id?: number;
  directorCategoryTypeCode?: string;
  directorCategoryType?: string;
  directorCategoryTypeDetails?: string | null;
}

export const defaultValue: Readonly<IExecutiveCategoryType> = {};
