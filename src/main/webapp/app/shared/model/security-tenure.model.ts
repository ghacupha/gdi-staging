export interface ISecurityTenure {
  id?: number;
  securityTenureCode?: string;
  securityTenureType?: string;
  securityTenureDetails?: string | null;
}

export const defaultValue: Readonly<ISecurityTenure> = {};
