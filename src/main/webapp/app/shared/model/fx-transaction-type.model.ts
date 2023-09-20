export interface IFxTransactionType {
  id?: number;
  fxTransactionTypeCode?: string;
  fxTransactionType?: string;
  fxTransactionTypeDescription?: string | null;
}

export const defaultValue: Readonly<IFxTransactionType> = {};
