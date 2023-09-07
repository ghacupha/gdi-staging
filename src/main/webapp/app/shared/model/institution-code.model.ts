import { IPlaceholder } from 'app/shared/model/erpService/placeholder.model';

export interface IInstitutionCode {
  id?: number;
  institutionCode?: string;
  institutionName?: string;
  shortName?: string | null;
  category?: string | null;
  institutionCategory?: string | null;
  placeholders?: IPlaceholder[] | null;
}

export const defaultValue: Readonly<IInstitutionCode> = {};
