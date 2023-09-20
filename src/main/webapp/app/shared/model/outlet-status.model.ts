import { IPlaceholder } from 'app/shared/model/service/placeholder.model';
import { BranchStatusType } from 'app/shared/model/enumerations/branch-status-type.model';

export interface IOutletStatus {
  id?: number;
  branchStatusTypeCode?: string;
  branchStatusType?: BranchStatusType;
  branchStatusTypeDescription?: string | null;
  placeholders?: IPlaceholder[] | null;
}

export const defaultValue: Readonly<IOutletStatus> = {};
