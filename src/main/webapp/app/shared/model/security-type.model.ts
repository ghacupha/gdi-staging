export interface ISecurityType {
  id?: number;
  securityTypeCode?: string;
  securityType?: string;
  securityTypeDetails?: string | null;
  securityTypeDescription?: string | null;
}

export const defaultValue: Readonly<ISecurityType> = {};
