export interface ICustomerType {
  id?: number;
  customerTypeCode?: string | null;
  customerType?: string | null;
  customerTypeDescription?: string | null;
}

export const defaultValue: Readonly<ICustomerType> = {};
