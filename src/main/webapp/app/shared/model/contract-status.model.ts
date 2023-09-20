export interface IContractStatus {
  id?: number;
  contractStatusCode?: string;
  contractStatusType?: string;
  contractStatusTypeDescription?: string | null;
}

export const defaultValue: Readonly<IContractStatus> = {};
