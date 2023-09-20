export interface ICrbRecordFileType {
  id?: number;
  recordFileTypeCode?: string;
  recordFileType?: string;
  recordFileTypeDetails?: string | null;
}

export const defaultValue: Readonly<ICrbRecordFileType> = {};
