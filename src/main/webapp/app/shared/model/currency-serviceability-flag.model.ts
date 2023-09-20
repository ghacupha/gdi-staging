import { CurrencyServiceabilityFlag } from 'app/shared/model/enumerations/currency-serviceability-flag.model';
import { CurrencyServiceability } from 'app/shared/model/enumerations/currency-serviceability.model';

export interface ICurrencyServiceabilityFlag {
  id?: number;
  currencyServiceabilityFlag?: CurrencyServiceabilityFlag;
  currencyServiceability?: CurrencyServiceability;
  currencyServiceabilityFlagDetails?: string | null;
}

export const defaultValue: Readonly<ICurrencyServiceabilityFlag> = {};
