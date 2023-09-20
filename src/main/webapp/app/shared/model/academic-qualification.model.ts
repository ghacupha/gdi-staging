export interface IAcademicQualification {
  id?: number;
  academicQualificationsCode?: string;
  academicQualificationType?: string;
  academicQualificationTypeDetail?: string | null;
}

export const defaultValue: Readonly<IAcademicQualification> = {};
