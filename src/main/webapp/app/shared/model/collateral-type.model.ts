export interface ICollateralType {
  id?: number;
  collateralTypeCode?: string;
  collateralType?: string;
  collateralTypeDescription?: string | null;
}

export const defaultValue: Readonly<ICollateralType> = {};
