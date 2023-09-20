export interface ICrbComplaintStatusType {
  id?: number;
  complaintStatusTypeCode?: string;
  complaintStatusType?: string;
  complaintStatusDetails?: string | null;
}

export const defaultValue: Readonly<ICrbComplaintStatusType> = {};
