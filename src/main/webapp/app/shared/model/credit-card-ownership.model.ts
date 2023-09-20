import { CreditCardOwnershipTypes } from 'app/shared/model/enumerations/credit-card-ownership-types.model';

export interface ICreditCardOwnership {
  id?: number;
  creditCardOwnershipCategoryCode?: string;
  creditCardOwnershipCategoryType?: CreditCardOwnershipTypes;
  description?: string | null;
}

export const defaultValue: Readonly<ICreditCardOwnership> = {};
