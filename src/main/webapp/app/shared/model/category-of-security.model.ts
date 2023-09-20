export interface ICategoryOfSecurity {
  id?: number;
  categoryOfSecurity?: string;
  categoryOfSecurityDetails?: string;
  categoryOfSecurityDescription?: string | null;
}

export const defaultValue: Readonly<ICategoryOfSecurity> = {};
