export interface ICrbSubmittingInstitutionCategory {
  id?: number;
  submittingInstitutionCategoryTypeCode?: string;
  submittingInstitutionCategoryType?: string;
  submittingInstitutionCategoryDetails?: string | null;
}

export const defaultValue: Readonly<ICrbSubmittingInstitutionCategory> = {};
