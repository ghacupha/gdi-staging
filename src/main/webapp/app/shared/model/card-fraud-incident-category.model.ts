export interface ICardFraudIncidentCategory {
  id?: number;
  cardFraudCategoryTypeCode?: string;
  cardFraudCategoryType?: string;
  cardFraudCategoryTypeDescription?: string | null;
}

export const defaultValue: Readonly<ICardFraudIncidentCategory> = {};
