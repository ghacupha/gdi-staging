import { RemittanceTypeFlag } from 'app/shared/model/enumerations/remittance-type-flag.model';
import { RemittanceType } from 'app/shared/model/enumerations/remittance-type.model';

export interface IRemittanceFlag {
  id?: number;
  remittanceTypeFlag?: RemittanceTypeFlag;
  remittanceType?: RemittanceType;
  remittanceTypeDetails?: string | null;
}

export const defaultValue: Readonly<IRemittanceFlag> = {};
