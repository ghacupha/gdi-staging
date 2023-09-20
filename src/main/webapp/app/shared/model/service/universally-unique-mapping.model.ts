import { IPlaceholder } from 'app/shared/model/service/placeholder.model';

export interface IUniversallyUniqueMapping {
  id?: number;
  universalKey?: string;
  mappedValue?: string | null;
  parentMapping?: IUniversallyUniqueMapping | null;
  placeholders?: IPlaceholder[] | null;
}

export const defaultValue: Readonly<IUniversallyUniqueMapping> = {};
