export interface ICommitteeType {
  id?: number;
  committeeTypeCode?: string;
  committeeType?: string | null;
  committeeTypeDetails?: string | null;
}

export const defaultValue: Readonly<ICommitteeType> = {};
