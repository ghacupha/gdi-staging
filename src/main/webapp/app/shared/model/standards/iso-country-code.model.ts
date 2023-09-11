import { IPlaceholder } from 'app/shared/model/service/placeholder.model';

export interface IIsoCountryCode {
  id?: number;
  countryCode?: string | null;
  countryDescription?: string | null;
  placeholders?: IPlaceholder[] | null;
}

export const defaultValue: Readonly<IIsoCountryCode> = {};
