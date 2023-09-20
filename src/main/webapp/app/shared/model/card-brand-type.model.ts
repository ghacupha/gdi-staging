export interface ICardBrandType {
  id?: number;
  cardBrandTypeCode?: string;
  cardBrandType?: string;
  cardBrandTypeDetails?: string | null;
}

export const defaultValue: Readonly<ICardBrandType> = {};
