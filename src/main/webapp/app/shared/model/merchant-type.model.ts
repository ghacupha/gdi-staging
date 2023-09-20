export interface IMerchantType {
  id?: number;
  merchantTypeCode?: string;
  merchantType?: string;
  merchantTypeDetails?: string | null;
}

export const defaultValue: Readonly<IMerchantType> = {};
