export interface IFraudType {
  id?: number;
  fraudTypeCode?: string;
  fraudType?: string;
  fraudTypeDetails?: string | null;
}

export const defaultValue: Readonly<IFraudType> = {};
