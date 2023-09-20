export interface ITerminalFunctions {
  id?: number;
  functionCode?: string;
  terminalFunctionality?: string;
  terminalFunctionalityDescription?: string | null;
}

export const defaultValue: Readonly<ITerminalFunctions> = {};
