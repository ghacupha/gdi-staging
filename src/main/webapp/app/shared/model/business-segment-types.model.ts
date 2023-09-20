export interface IBusinessSegmentTypes {
  id?: number;
  businessEconomicSegmentCode?: string;
  businessEconomicSegment?: string;
  details?: string | null;
}

export const defaultValue: Readonly<IBusinessSegmentTypes> = {};
