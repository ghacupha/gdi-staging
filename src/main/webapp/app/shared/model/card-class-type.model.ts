export interface ICardClassType {
  id?: number;
  cardClassTypeCode?: string;
  cardClassType?: string;
  cardClassDetails?: string | null;
}

export const defaultValue: Readonly<ICardClassType> = {};
