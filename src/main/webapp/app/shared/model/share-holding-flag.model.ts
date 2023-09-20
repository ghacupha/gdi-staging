import { ShareholdingFlagTypes } from 'app/shared/model/enumerations/shareholding-flag-types.model';

export interface IShareHoldingFlag {
  id?: number;
  shareholdingFlagTypeCode?: ShareholdingFlagTypes;
  shareholdingFlagType?: string;
  shareholdingTypeDescription?: string | null;
}

export const defaultValue: Readonly<IShareHoldingFlag> = {};
