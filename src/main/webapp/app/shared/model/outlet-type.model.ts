import { IPlaceholder } from 'app/shared/model/service/placeholder.model';

export interface IOutletType {
  id?: number;
  outletTypeCode?: string;
  outletType?: string;
  outletTypeDetails?: string | null;
  placeholders?: IPlaceholder[] | null;
}

export const defaultValue: Readonly<IOutletType> = {};
