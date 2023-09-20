export interface IInterestCalcMethod {
  id?: number;
  interestCalculationMethodCode?: string;
  interestCalculationMthodType?: string;
  interestCalculationMethodDetails?: string | null;
}

export const defaultValue: Readonly<IInterestCalcMethod> = {};
