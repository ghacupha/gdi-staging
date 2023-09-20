export interface ILoanRestructureItem {
  id?: number;
  loanRestructureItemCode?: string;
  loanRestructureItemType?: string;
  loanRestructureItemDetails?: string | null;
}

export const defaultValue: Readonly<ILoanRestructureItem> = {};
