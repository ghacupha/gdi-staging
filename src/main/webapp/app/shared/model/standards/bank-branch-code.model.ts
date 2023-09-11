import { IPlaceholder } from 'app/shared/model/service/placeholder.model';

export interface IBankBranchCode {
  id?: number;
  bankCode?: string | null;
  bankName?: string;
  branchCode?: string | null;
  branchName?: string | null;
  notes?: string | null;
  placeholders?: IPlaceholder[] | null;
}

export const defaultValue: Readonly<IBankBranchCode> = {};
