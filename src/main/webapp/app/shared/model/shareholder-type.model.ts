import { ShareHolderTypes } from 'app/shared/model/enumerations/share-holder-types.model';

export interface IShareholderType {
  id?: number;
  shareHolderTypeCode?: string;
  shareHolderType?: ShareHolderTypes;
}

export const defaultValue: Readonly<IShareholderType> = {};
