export interface IAccountOwnershipType {
  id?: number;
  accountOwnershipTypeCode?: string;
  accountOwnershipType?: string;
  description?: string | null;
}

export const defaultValue: Readonly<IAccountOwnershipType> = {};
