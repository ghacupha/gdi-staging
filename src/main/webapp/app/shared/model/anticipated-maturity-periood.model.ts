export interface IAnticipatedMaturityPeriood {
  id?: number;
  anticipatedMaturityTenorCode?: string;
  aniticipatedMaturityTenorType?: string;
  anticipatedMaturityTenorDetails?: string | null;
}

export const defaultValue: Readonly<IAnticipatedMaturityPeriood> = {};
