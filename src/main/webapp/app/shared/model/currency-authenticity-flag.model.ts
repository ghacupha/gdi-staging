import { CurrencyAuthenticityFlags } from 'app/shared/model/enumerations/currency-authenticity-flags.model';
import { CurrencyAuthenticityTypes } from 'app/shared/model/enumerations/currency-authenticity-types.model';

export interface ICurrencyAuthenticityFlag {
  id?: number;
  currencyAuthenticityFlag?: CurrencyAuthenticityFlags;
  currencyAuthenticityType?: CurrencyAuthenticityTypes;
  currencyAuthenticityTypeDetails?: string | null;
}

export const defaultValue: Readonly<ICurrencyAuthenticityFlag> = {};
