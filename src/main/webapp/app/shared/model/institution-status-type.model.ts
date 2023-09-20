export interface IInstitutionStatusType {
  id?: number;
  institutionStatusCode?: string;
  institutionStatusType?: string | null;
  insitutionStatusTypeDescription?: string | null;
}

export const defaultValue: Readonly<IInstitutionStatusType> = {};
