export interface ILoanApplicationType {
  id?: number;
  loanApplicationTypeCode?: string;
  loanApplicationType?: string;
  loanApplicationDetails?: string | null;
}

export const defaultValue: Readonly<ILoanApplicationType> = {};
