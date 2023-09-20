export interface IIsicEconomicActivity {
  id?: number;
  businessEconomicActivityCode?: string;
  section?: string;
  sectionLabel?: string;
  division?: string;
  divisionLabel?: string;
  groupCode?: string | null;
  groupLabel?: string;
  classCode?: string;
  businessEconomicActivityType?: string | null;
  businessEconomicActivityTypeDescription?: string | null;
}

export const defaultValue: Readonly<IIsicEconomicActivity> = {};
