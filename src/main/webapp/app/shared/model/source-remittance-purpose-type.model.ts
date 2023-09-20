import { SourceOrPurposeOfRemittancFlag } from 'app/shared/model/enumerations/source-or-purpose-of-remittanc-flag.model';

export interface ISourceRemittancePurposeType {
  id?: number;
  sourceOrPurposeTypeCode?: string;
  sourceOrPurposeOfRemittanceFlag?: SourceOrPurposeOfRemittancFlag;
  sourceOrPurposeOfRemittanceType?: string;
  remittancePurposeTypeDetails?: string | null;
}

export const defaultValue: Readonly<ISourceRemittancePurposeType> = {};
