export interface IReasonsForBouncedCheque {
  id?: number;
  bouncedChequeReasonsTypeCode?: string;
  bouncedChequeReasonsType?: string | null;
}

export const defaultValue: Readonly<IReasonsForBouncedCheque> = {};
