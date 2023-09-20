export interface ILoanRepaymentFrequency {
  id?: number;
  frequencyTypeCode?: string;
  frequencyType?: string;
  frequencyTypeDetails?: string | null;
}

export const defaultValue: Readonly<ILoanRepaymentFrequency> = {};
