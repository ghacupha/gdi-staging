import { IPlaceholder } from 'app/shared/model/erpService/placeholder.model';

export interface ISubCountyCode {
  id?: number;
  countyCode?: string | null;
  countyName?: string | null;
  subCountyCode?: string | null;
  subCountyName?: string | null;
  placeholders?: IPlaceholder[] | null;
}

export const defaultValue: Readonly<ISubCountyCode> = {};
