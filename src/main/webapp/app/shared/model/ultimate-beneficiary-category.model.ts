export interface IUltimateBeneficiaryCategory {
  id?: number;
  ultimateBeneficiaryCategoryTypeCode?: string;
  ultimateBeneficiaryType?: string;
  ultimateBeneficiaryCategoryTypeDetails?: string | null;
}

export const defaultValue: Readonly<IUltimateBeneficiaryCategory> = {};
