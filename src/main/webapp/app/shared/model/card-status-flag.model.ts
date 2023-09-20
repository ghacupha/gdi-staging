import { FlagCodes } from 'app/shared/model/enumerations/flag-codes.model';

export interface ICardStatusFlag {
  id?: number;
  cardStatusFlag?: FlagCodes;
  cardStatusFlagDescription?: string;
  cardStatusFlagDetails?: string | null;
}

export const defaultValue: Readonly<ICardStatusFlag> = {};
