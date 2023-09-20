import { FlagCodes } from 'app/shared/model/enumerations/flag-codes.model';

export interface ILoanRestructureFlag {
  id?: number;
  loanRestructureFlagCode?: FlagCodes;
  loanRestructureFlagType?: string;
  loanRestructureFlagDetails?: string | null;
}

export const defaultValue: Readonly<ILoanRestructureFlag> = {};
