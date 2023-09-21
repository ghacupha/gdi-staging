export interface IProductType {
  id?: number;
  productCode?: string;
  productType?: string | null;
  productTypeDescription?: string | null;
}

export const defaultValue: Readonly<IProductType> = {};
