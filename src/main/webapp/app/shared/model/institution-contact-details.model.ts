export interface IInstitutionContactDetails {
  id?: number;
  entityId?: string;
  entityName?: string;
  contactType?: string;
  contactLevel?: string | null;
  contactValue?: string | null;
  contactName?: string | null;
  contactDesignation?: string | null;
}

export const defaultValue: Readonly<IInstitutionContactDetails> = {};
