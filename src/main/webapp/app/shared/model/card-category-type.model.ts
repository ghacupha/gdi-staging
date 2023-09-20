import { CardCategoryFlag } from 'app/shared/model/enumerations/card-category-flag.model';

export interface ICardCategoryType {
  id?: number;
  cardCategoryFlag?: CardCategoryFlag;
  cardCategoryDescription?: string;
  cardCategoryDetails?: string | null;
}

export const defaultValue: Readonly<ICardCategoryType> = {};
