export interface ICounterpartyType {
  id?: number;
  counterpartyTypeCode?: string;
  counterPartyType?: string;
  counterpartyTypeDescription?: string | null;
}

export const defaultValue: Readonly<ICounterpartyType> = {};
