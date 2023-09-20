export interface ISnaSectorCode {
  id?: number;
  sectorTypeCode?: string;
  mainSectorCode?: string | null;
  mainSectorTypeName?: string | null;
  subSectorCode?: string | null;
  subSectorName?: string | null;
  subSubSectorCode?: string | null;
  subSubSectorName?: string | null;
}

export const defaultValue: Readonly<ISnaSectorCode> = {};
