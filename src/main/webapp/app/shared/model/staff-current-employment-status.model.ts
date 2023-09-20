export interface IStaffCurrentEmploymentStatus {
  id?: number;
  staffCurrentEmploymentStatusTypeCode?: string;
  staffCurrentEmploymentStatusType?: string;
  staffCurrentEmploymentStatusTypeDetails?: string | null;
}

export const defaultValue: Readonly<IStaffCurrentEmploymentStatus> = {};
