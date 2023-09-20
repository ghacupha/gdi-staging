export interface ILegalStatus {
  id?: number;
  legalStatusCode?: string;
  legalStatusType?: string;
  legalStatusDescription?: string | null;
}

export const defaultValue: Readonly<ILegalStatus> = {};
