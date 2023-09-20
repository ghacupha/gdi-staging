export interface ICrbAccountStatus {
  id?: number;
  accountStatusTypeCode?: string;
  accountStatusType?: string;
  accountStatusTypeDetails?: string | null;
}

export const defaultValue: Readonly<ICrbAccountStatus> = {};
