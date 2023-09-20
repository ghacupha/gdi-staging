export interface IIsoCountryCode {
  id?: number;
  countryCode?: string | null;
  countryDescription?: string | null;
  continentCode?: string | null;
  continentName?: string | null;
  subRegion?: string | null;
}

export const defaultValue: Readonly<IIsoCountryCode> = {};
