export interface ICrbCreditApplicationStatus {
  id?: number;
  crbCreditApplicationStatusTypeCode?: string;
  crbCreditApplicationStatusType?: string;
  crbCreditApplicationStatusDetails?: string | null;
}

export const defaultValue: Readonly<ICrbCreditApplicationStatus> = {};
