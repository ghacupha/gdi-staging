export interface IFinancialDerivativeTypeCode {
  id?: number;
  financialDerivativeTypeCode?: string;
  financialDerivativeType?: string;
  financialDerivativeTypeDetails?: string | null;
}

export const defaultValue: Readonly<IFinancialDerivativeTypeCode> = {};
