export interface ITerminalTypes {
  id?: number;
  txnTerminalTypeCode?: string;
  txnChannelType?: string;
  txnChannelTypeDetails?: string | null;
}

export const defaultValue: Readonly<ITerminalTypes> = {};
