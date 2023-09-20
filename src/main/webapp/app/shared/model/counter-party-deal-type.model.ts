export interface ICounterPartyDealType {
  id?: number;
  counterpartyDealCode?: string;
  counterpartyDealTypeDetails?: string;
  counterpartyDealTypeDescription?: string | null;
}

export const defaultValue: Readonly<ICounterPartyDealType> = {};
