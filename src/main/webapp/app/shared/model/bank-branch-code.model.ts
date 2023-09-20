import { IPlaceholder } from 'app/shared/model/service/placeholder.model';

export interface IBankBranchCode {
  id?: number;
  bankCode?: string | null;
  bankName?: string;
  branchCode?: string;
  branchName?: string | null;
  notes?: string | null;
  placeholders?: IPlaceholder[] | null;
}

export const defaultValue: Readonly<IBankBranchCode> = {};
