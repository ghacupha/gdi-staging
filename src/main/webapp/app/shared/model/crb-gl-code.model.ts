export interface ICrbGlCode {
  id?: number;
  glCode?: string;
  glDescription?: string;
  glType?: string;
  institutionCategory?: string;
}

export const defaultValue: Readonly<ICrbGlCode> = {};
