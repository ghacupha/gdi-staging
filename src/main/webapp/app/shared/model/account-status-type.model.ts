import { AccountStatusTypes } from 'app/shared/model/enumerations/account-status-types.model';

export interface IAccountStatusType {
  id?: number;
  accountStatusCode?: string;
  accountStatusType?: AccountStatusTypes;
  accountStatusDescription?: string | null;
}

export const defaultValue: Readonly<IAccountStatusType> = {};
