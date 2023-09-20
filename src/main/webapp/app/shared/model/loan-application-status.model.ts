export interface ILoanApplicationStatus {
  id?: number;
  loanApplicationStatusTypeCode?: string;
  loanApplicationStatusType?: string;
  loanApplicationStatusDetails?: string | null;
}

export const defaultValue: Readonly<ILoanApplicationStatus> = {};
