export interface IDerivativeUnderlyingAsset {
  id?: number;
  derivativeUnderlyingAssetTypeCode?: string;
  financialDerivativeUnderlyingAssetType?: string;
  derivativeUnderlyingAssetTypeDetails?: string | null;
}

export const defaultValue: Readonly<IDerivativeUnderlyingAsset> = {};
