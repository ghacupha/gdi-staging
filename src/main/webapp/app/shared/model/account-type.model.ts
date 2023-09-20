export interface IAccountType {
  id?: number;
  accountTypeCode?: string;
  accountType?: string | null;
  description?: string | null;
}

export const defaultValue: Readonly<IAccountType> = {};
