export interface ISnaSectorCode {
  id?: number;
  sectorTypeCode?: string;
  mainSectorCode?: string | null;
  mainSectorTypeName?: string | null;
  subSectorCode?: string | null;
  subSectorName?: string | null;
  subSubSectorCodeSubSubSectorName?: string | null;
}

export const defaultValue: Readonly<ISnaSectorCode> = {};
