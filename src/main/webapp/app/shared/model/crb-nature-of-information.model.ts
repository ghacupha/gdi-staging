export interface ICrbNatureOfInformation {
  id?: number;
  natureOfInformationTypeCode?: string;
  natureOfInformationType?: string;
  natureOfInformationTypeDescription?: string | null;
}

export const defaultValue: Readonly<ICrbNatureOfInformation> = {};
