export interface ICrbAgentServiceType {
  id?: number;
  agentServiceTypeCode?: string;
  agentServiceTypeDetails?: string | null;
}

export const defaultValue: Readonly<ICrbAgentServiceType> = {};
