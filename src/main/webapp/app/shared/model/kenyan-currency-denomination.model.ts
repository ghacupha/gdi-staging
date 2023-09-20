export interface IKenyanCurrencyDenomination {
  id?: number;
  currencyDenominationCode?: string;
  currencyDenominationType?: string;
  currencyDenominationTypeDetails?: string | null;
}

export const defaultValue: Readonly<IKenyanCurrencyDenomination> = {};
