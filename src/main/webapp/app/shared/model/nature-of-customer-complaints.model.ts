export interface INatureOfCustomerComplaints {
  id?: number;
  natureOfComplaintTypeCode?: string;
  natureOfComplaintType?: string;
  natureOfComplaintTypeDetails?: string | null;
}

export const defaultValue: Readonly<INatureOfCustomerComplaints> = {};
