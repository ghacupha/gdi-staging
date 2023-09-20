export interface ILoanDeclineReason {
  id?: number;
  loanDeclineReasonTypeCode?: string;
  loanDeclineReasonType?: string;
  loanDeclineReasonDetails?: string | null;
}

export const defaultValue: Readonly<ILoanDeclineReason> = {};
