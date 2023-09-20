export interface IIssuersOfSecurities {
  id?: number;
  issuerOfSecuritiesCode?: string;
  issuerOfSecurities?: string;
  issuerOfSecuritiesDescription?: string | null;
}

export const defaultValue: Readonly<IIssuersOfSecurities> = {};
