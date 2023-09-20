import { CurrencyServiceabilityFlagTypes } from 'app/shared/model/enumerations/currency-serviceability-flag-types.model';
import { CurrencyServiceability } from 'app/shared/model/enumerations/currency-serviceability.model';

export interface ICurrencyServiceabilityFlag {
  id?: number;
  currencyServiceabilityFlag?: CurrencyServiceabilityFlagTypes;
  currencyServiceability?: CurrencyServiceability;
  currencyServiceabilityFlagDetails?: string | null;
}

export const defaultValue: Readonly<ICurrencyServiceabilityFlag> = {};
