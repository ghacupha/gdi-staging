export interface ICrbComplaintType {
  id?: number;
  complaintTypeCode?: string;
  complaintType?: string;
  complaintTypeDetails?: string | null;
}

export const defaultValue: Readonly<ICrbComplaintType> = {};
