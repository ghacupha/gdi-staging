export interface IIsoCurrencyCode {
  id?: number;
  alphabeticCode?: string;
  numericCode?: string;
  minorUnit?: string;
  currency?: string;
  country?: string | null;
}

export const defaultValue: Readonly<IIsoCurrencyCode> = {};
