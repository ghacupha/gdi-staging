export interface ILoanPerformanceClassification {
  id?: number;
  loanPerformanceClassificationCode?: string;
  loanPerformanceClassificationType?: string;
  commercialBankDescription?: string | null;
  microfinanceDescription?: string | null;
}

export const defaultValue: Readonly<ILoanPerformanceClassification> = {};
