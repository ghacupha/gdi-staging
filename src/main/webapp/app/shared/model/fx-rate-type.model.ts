export interface IFxRateType {
  id?: number;
  fxRateCode?: string;
  fxRateType?: string;
  fxRateDetails?: string | null;
}

export const defaultValue: Readonly<IFxRateType> = {};
