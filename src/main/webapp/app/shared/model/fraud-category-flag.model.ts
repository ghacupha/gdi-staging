import { FlagCodes } from 'app/shared/model/enumerations/flag-codes.model';

export interface IFraudCategoryFlag {
  id?: number;
  fraudCategoryFlag?: FlagCodes;
  fraudCategoryTypeDetails?: string | null;
}

export const defaultValue: Readonly<IFraudCategoryFlag> = {};
