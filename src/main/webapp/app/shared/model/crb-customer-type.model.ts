export interface ICrbCustomerType {
  id?: number;
  customerTypeCode?: string;
  customerType?: string;
  description?: string | null;
}

export const defaultValue: Readonly<ICrbCustomerType> = {};
