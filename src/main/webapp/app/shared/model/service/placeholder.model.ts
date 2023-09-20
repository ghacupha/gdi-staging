export interface IPlaceholder {
  id?: number;
  description?: string;
  token?: string | null;
  containingPlaceholder?: IPlaceholder | null;
}

export const defaultValue: Readonly<IPlaceholder> = {};
