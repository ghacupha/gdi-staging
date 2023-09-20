import { genderTypes } from 'app/shared/model/enumerations/gender-types.model';

export interface IGenderType {
  id?: number;
  genderCode?: string;
  genderType?: genderTypes;
  genderDescription?: string | null;
}

export const defaultValue: Readonly<IGenderType> = {};
