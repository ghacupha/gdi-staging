import dayjs from 'dayjs';
import { IPlaceholder } from 'app/shared/model/service/placeholder.model';

export interface IInstitutionCode {
  id?: number;
  institutionCode?: string;
  institutionName?: string;
  shortName?: string | null;
  category?: string | null;
  institutionCategory?: string | null;
  institutionOwnership?: string | null;
  dateLicensed?: string | null;
  institutionStatus?: string | null;
  placeholders?: IPlaceholder[] | null;
}

export const defaultValue: Readonly<IInstitutionCode> = {};
