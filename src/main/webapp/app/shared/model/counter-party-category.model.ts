import { CounterpartyCategory } from 'app/shared/model/enumerations/counterparty-category.model';

export interface ICounterPartyCategory {
  id?: number;
  counterpartyCategoryCode?: string;
  counterpartyCategoryCodeDetails?: CounterpartyCategory;
  counterpartyCategoryDescription?: string | null;
}

export const defaultValue: Readonly<ICounterPartyCategory> = {};
