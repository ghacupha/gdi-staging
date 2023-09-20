export interface IFxTransactionRateType {
  id?: number;
  fxTransactionRateTypeCode?: string;
  fxTransactionRateType?: string;
  fxTransactionRateTypeDetails?: string | null;
}

export const defaultValue: Readonly<IFxTransactionRateType> = {};
