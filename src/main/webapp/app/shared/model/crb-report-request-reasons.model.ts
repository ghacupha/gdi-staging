export interface ICrbReportRequestReasons {
  id?: number;
  creditReportRequestReasonTypeCode?: string;
  creditReportRequestReasonType?: string;
  creditReportRequestDetails?: string | null;
}

export const defaultValue: Readonly<ICrbReportRequestReasons> = {};
