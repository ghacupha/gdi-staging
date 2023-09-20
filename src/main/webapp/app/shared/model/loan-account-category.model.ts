import { LoanAccountMutationTypes } from 'app/shared/model/enumerations/loan-account-mutation-types.model';

export interface ILoanAccountCategory {
  id?: number;
  loanAccountMutationCode?: string;
  loanAccountMutationType?: LoanAccountMutationTypes;
  loanAccountMutationDetails?: string;
  loanAccountMutationDescription?: string | null;
}

export const defaultValue: Readonly<ILoanAccountCategory> = {};
