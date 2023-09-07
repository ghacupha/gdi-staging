import { IUniversallyUniqueMapping } from 'app/shared/model/universally-unique-mapping.model';

export interface IPlaceholder {
  id?: number;
  description?: string;
  token?: string | null;
  containingPlaceholder?: IPlaceholder | null;
  universallyUniqueMappings?: IUniversallyUniqueMapping[] | null;
}

export const defaultValue: Readonly<IPlaceholder> = {};
