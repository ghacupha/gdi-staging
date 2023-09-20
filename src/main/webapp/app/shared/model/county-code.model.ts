import { IPlaceholder } from 'app/shared/model/service/placeholder.model';

export interface ICountyCode {
  id?: number;
  countyCode?: number;
  countyName?: string;
  subCountyCode?: number;
  subCountyName?: string;
  placeholders?: IPlaceholder[] | null;
}

export const defaultValue: Readonly<ICountyCode> = {};
