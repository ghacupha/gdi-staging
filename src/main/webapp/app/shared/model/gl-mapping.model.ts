export interface IGlMapping {
  id?: number;
  subGLCode?: string;
  subGLDescription?: string | null;
  mainGLCode?: string;
  mainGLDescription?: string | null;
  glType?: string;
}

export const defaultValue: Readonly<IGlMapping> = {};
