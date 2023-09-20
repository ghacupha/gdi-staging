export interface ILoanProductType {
  id?: number;
  productCode?: string;
  productType?: string;
  productTypeDescription?: string | null;
}

export const defaultValue: Readonly<ILoanProductType> = {};
