export interface IProfessionalQualification {
  id?: number;
  professionalQualificationsCode?: string;
  professionalQualificationsType?: string;
  professionalQualificationsDetails?: string | null;
}

export const defaultValue: Readonly<IProfessionalQualification> = {};
