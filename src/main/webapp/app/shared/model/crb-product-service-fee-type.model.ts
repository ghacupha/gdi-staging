export interface ICrbProductServiceFeeType {
  id?: number;
  chargeTypeCode?: string;
  chargeTypeDescription?: string | null;
  chargeTypeCategory?: string;
}

export const defaultValue: Readonly<ICrbProductServiceFeeType> = {};
