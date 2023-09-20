export interface IAcquiringIssuingFlag {
  id?: number;
  cardAcquiringIssuingFlagCode?: string;
  cardAcquiringIssuingDescription?: string;
  cardAcquiringIssuingDetails?: string | null;
}

export const defaultValue: Readonly<IAcquiringIssuingFlag> = {};
