import { IPlaceholder } from 'app/shared/model/erpService/placeholder.model';

export interface IMfbBranchCode {
  id?: number;
  bankCode?: string | null;
  bankName?: string | null;
  branchCode?: string | null;
  branchName?: string | null;
  placeholders?: IPlaceholder[] | null;
}

export const defaultValue: Readonly<IMfbBranchCode> = {};
