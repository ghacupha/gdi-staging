import { SubmittedFileStatusTypes } from 'app/shared/model/enumerations/submitted-file-status-types.model';

export interface ICrbFileTransmissionStatus {
  id?: number;
  submittedFileStatusTypeCode?: string;
  submittedFileStatusType?: SubmittedFileStatusTypes;
  submittedFileStatusTypeDescription?: string | null;
}

export const defaultValue: Readonly<ICrbFileTransmissionStatus> = {};
