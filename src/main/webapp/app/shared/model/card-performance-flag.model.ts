import { CardPerformanceFlags } from 'app/shared/model/enumerations/card-performance-flags.model';

export interface ICardPerformanceFlag {
  id?: number;
  cardPerformanceFlag?: CardPerformanceFlags;
  cardPerformanceFlagDescription?: string;
  cardPerformanceFlagDetails?: string | null;
}

export const defaultValue: Readonly<ICardPerformanceFlag> = {};
