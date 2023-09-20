export interface ISecurityClassificationType {
  id?: number;
  securityClassificationTypeCode?: string;
  securityClassificationType?: string;
  securityClassificationDetails?: string | null;
}

export const defaultValue: Readonly<ISecurityClassificationType> = {};
