export interface IStaffRoleType {
  id?: number;
  staffRoleTypeCode?: string;
  staffRoleType?: string;
  staffRoleTypeDetails?: string | null;
}

export const defaultValue: Readonly<IStaffRoleType> = {};
