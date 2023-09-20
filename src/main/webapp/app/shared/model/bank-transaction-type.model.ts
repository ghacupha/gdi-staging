export interface IBankTransactionType {
  id?: number;
  transactionTypeCode?: string;
  transactionTypeDetails?: string;
}

export const defaultValue: Readonly<IBankTransactionType> = {};
