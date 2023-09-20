export interface IPartyRelationType {
  id?: number;
  partyRelationTypeCode?: string;
  partyRelationType?: string;
  partyRelationTypeDescription?: string | null;
}

export const defaultValue: Readonly<IPartyRelationType> = {};
