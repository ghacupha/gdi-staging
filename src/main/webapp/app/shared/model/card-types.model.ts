export interface ICardTypes {
  id?: number;
  cardTypeCode?: string;
  cardType?: string;
  cardTypeDetails?: string | null;
}

export const defaultValue: Readonly<ICardTypes> = {};
