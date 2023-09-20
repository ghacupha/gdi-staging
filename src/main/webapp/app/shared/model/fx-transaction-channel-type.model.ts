export interface IFxTransactionChannelType {
  id?: number;
  fxTransactionChannelCode?: string;
  fxTransactionChannelType?: string;
  fxChannelTypeDetails?: string | null;
}

export const defaultValue: Readonly<IFxTransactionChannelType> = {};
