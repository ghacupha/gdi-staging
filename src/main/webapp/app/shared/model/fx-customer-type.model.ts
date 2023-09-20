export interface IFxCustomerType {
  id?: number;
  foreignExchangeCustomerTypeCode?: string;
  foreignCustomerType?: string;
}

export const defaultValue: Readonly<IFxCustomerType> = {};
