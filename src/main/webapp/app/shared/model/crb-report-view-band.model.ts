export interface ICrbReportViewBand {
  id?: number;
  reportViewCode?: string;
  reportViewCategory?: string;
  reportViewCategoryDescription?: string | null;
}

export const defaultValue: Readonly<ICrbReportViewBand> = {};
