export interface IChannelType {
  id?: number;
  channelsTypeCode?: string;
  channelTypes?: string;
  channelTypeDetails?: string | null;
}

export const defaultValue: Readonly<IChannelType> = {};
