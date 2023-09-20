export interface ICardCharges {
  id?: number;
  cardChargeType?: string;
  cardChargeTypeName?: string;
  cardChargeDetails?: string | null;
}

export const defaultValue: Readonly<ICardCharges> = {};
