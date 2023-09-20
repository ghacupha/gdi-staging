export interface ICustomerComplaintStatusType {
  id?: number;
  customerComplaintStatusTypeCode?: string;
  customerComplaintStatusType?: string;
  customerComplaintStatusTypeDetails?: string | null;
}

export const defaultValue: Readonly<ICustomerComplaintStatusType> = {};
